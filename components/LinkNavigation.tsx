import Link from "next/link";
import { LinkNavigationProps } from "../types/componentTypes";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function LinkNavigation({ navItem }: LinkNavigationProps) {
  return (
    <Link href={navItem.href}>
      <a
        key={navItem.name}
        className={classNames(
          navItem.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
        )}
      >
        <navItem.icon
          className={classNames(
            navItem.current
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-gray-300",
            "mr-4 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        {navItem.name}
      </a>
    </Link>
  );
}
