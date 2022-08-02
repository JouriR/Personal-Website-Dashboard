import type { Dispatch, SetStateAction } from "react";

export type AuthProps = {
  middleware?: string;
  redirectIfAuthenticated?: string;
};

export type LoginProps = {
  setErrors: Dispatch<SetStateAction<Array<string>>>;
  setStatus: Dispatch<SetStateAction<number>>;
};

export type SessionStatusProps = {
  status: number;
  className?: string;
};
