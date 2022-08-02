import { SessionStatusProps } from "../../types/authTypes";

const AuthSessionStatus = ({ status, className, ...props }: SessionStatusProps) => (
  <>
    {status && (
      <div
        className={`${className} font-medium text-sm text-green-600`}
        {...props}
      >
        {status}
      </div>
    )}
  </>
);

export default AuthSessionStatus;
