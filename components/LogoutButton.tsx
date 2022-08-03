import { LogoutIcon } from "@heroicons/react/outline";

export default function LogoutButton() {
  return (
    <a
      type="button"
      className="inline-flex items-center text-center w-fit mx-3 px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:mb-5"
    >
      <LogoutIcon className="text-white w-6 mr-2" />
      Logout
    </a>
  );
}
