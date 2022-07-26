import useSWR from "swr";
import axios from "../lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AuthProps, LoginProps } from "../types/authTypes";

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: AuthProps = {}) => {
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
    await csrf();

    setErrors([]);
    setStatus(null!);

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        /* 
          Check to see if errorsArray is really an array to fix the TypeScript error:
          Argument of type 'unknown[]' is not assignable to parameter of type 'SetStateAction<string[]>'.
         */
        let errorsArray = Object.values(error.response.data.errors).flat();
        if (Array.isArray(errorsArray)) {
          setErrors(errorsArray);
        }
      });
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);

    if (middleware === "auth" && error) logout();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, error]);

  return {
    user,
    login,
    logout,
  };
};
