import Link from "next/link";
import { LinkButtonProps } from "../types/componentTypes";

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link href={href}>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        {children}
      </button>
    </Link>
  );
}
