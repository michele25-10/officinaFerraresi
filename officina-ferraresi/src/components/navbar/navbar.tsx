import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
              id="dropdown-menu"
            >
              <li>
                <a id="text-dropdown">Home</a>
              </li>
              <li>
                <a id="text-dropdown">Chi siamo?</a>
              </li>
              <li>
                <a id="text-dropdown">Galleria</a>
              </li>
              <li>
                <a id="text-dropdown">Info</a>
              </li>
              <li>
                <a id="text-dropdown">Contatti</a>
              </li>
              <li>
                <a id="text-dropdown">Luogo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="title">Officina Ferraresi</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
