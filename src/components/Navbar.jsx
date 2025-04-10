import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    setTheme(theme === "light" ? "synthwave" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const storedTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", storedTheme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-secondary gap-0">
          Byte <span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="flex  justify-center items-center gap-5 px-5">
        <ul className="menu menu-horizontal px-1 gap-5 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "font-bold"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/Bookmark"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "font-bold"
            }
          >
            Bookmarks
          </NavLink>
        </ul>
        <div>
          <button>
            <label className="grid cursor-pointer place-items-center">
              <input
                onClick={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
