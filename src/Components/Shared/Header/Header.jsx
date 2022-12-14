import React from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../../Assets/Main_Resume.pdf";

const Header = () => {
  return (
    <div className=" bg-slate-50 sticky top-0 border-b border-[rgba(0,0,0,0.1)] z-10 py-2">
      <div className="navbar md:w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#000",
                    background: isActive ? "#4ADE80" : "#F8FAFC",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allprojects"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#000",
                    background: isActive ? "#4ADE80" : "#F8FAFC",
                  })}
                >
                  All Projects
                </NavLink>
              </li>
            </ul>
          </div>

          {/* logo section */}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Refaul's Portfolio
          </Link>

          {/* menu section for large device */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#000",
                  background: isActive ? "#4ADE80" : "#F8FAFC",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allprojects"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#000",
                  background: isActive ? "#4ADE80" : "#F8FAFC",
                })}
              >
                All Projects
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <button className="btn bg-green-500 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
            <a href={resume} download="MD.Refaul Islam's Resume.pdf">
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
