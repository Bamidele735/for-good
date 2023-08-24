import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-transparent dark:bg-white  w-full z-20 top-0 left-0 border-transparent border-transparent dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ul className="flex flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="https://www.angelwarriors.xyz/"
                className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                aria-current="page"
                target="_blank"
                rel="noreferrer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://mint.angelwarriors.xyz/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Mint
              </a>
            </li>


          </ul>
      </div>
    </nav>
  );
}
