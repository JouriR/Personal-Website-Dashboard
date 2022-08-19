import Link from "next/link";
import { LinkPrimaryProps } from "../types/componentTypes";

export default function LinkPrimary({ children, href }: LinkPrimaryProps) {
  return (
    <Link href={href}>
      <a className="text-indigo-600 hover:text-indigo-900">{children}</a>
    </Link>
  );
}
