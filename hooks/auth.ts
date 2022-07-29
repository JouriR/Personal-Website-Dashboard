import useSWR from "swr";
import axios from "../lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getApiLink } from "../imports/functions";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const apiLink = getApiLink();
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`${apiLink}/user`, () =>
    axios
      .get(`${apiLink}/user`)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
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
  }, [user, error]);

  return {
    user,
    login,
    logout,
  };
};
