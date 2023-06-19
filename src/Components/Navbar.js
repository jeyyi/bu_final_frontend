import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-200 flex flex-col items-center justify-center">
        {/* Start of navbar */}
        <div className="navbar bg-base-100 lg:hidden w-full">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">bosesKO</a>
          </div>
          {/* Logout Icon */}
          <div className="flex-none">
            <button className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
      {/* Side drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu menu-md p-4 w-80 lg:w-96 h-full bg-white text-base-content">
          <div className="w-full h-32 bg-base-200 rounded-full"></div>
          {/* Sidebar content here */}
          <li className="mt-5">
            <details open>
              <summary>Analysis</summary>
              <ul>
                <li>
                  <a href="/">Answers</a>
                </li>
                <li>
                  <a href="/">Analyse CSV</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
