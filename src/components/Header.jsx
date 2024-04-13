import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div>
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-m flex items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="src/assets/header-logo.png" className="h-8" alt="MOP logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Melbourne Open Playground
              </span>
            </a>
            <div className="flex flex-2 justify-center">
              <ul className="flex justify-evenly flex-1 md:justify-end">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-600"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/casestudies"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-500"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/datasets"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-500"
                  >
                    Datasets
                  </Link>
                </li>
              </ul>
            </div>
            <SearchBar/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;