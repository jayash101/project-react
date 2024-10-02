import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-[999] shadow">
      <nav className="flex w-full items-center justify-around bg-white px-2 py-2 outline outline-2 outline-gray-300/40">
        <Link to="/">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            alt="logo"
            className="w-40"
          />
        </Link>

        <ul className="flex justify-center gap-6 px-2 py-4 font-medium lg:order-1">
          <NavLink
            to=""
            className={({ isActive }) =>
              `hover:transition-all hover:[text-shadow:0_0_0.5vw] ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-red-500`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              `hover:transition-all hover:[text-shadow:0_0_0.5vw] ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-red-500`
            }
          >
            About
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `hover:transition-all hover:[text-shadow:0_0_0.5vw] ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-red-500`
            }
          >
            Contact
          </NavLink>
          
          <NavLink
            to="github"
            className={({ isActive }) =>
              `hover:transition-all hover:[text-shadow:0_0_0.5vw] ${isActive ? "text-orange-500" : "text-gray-700"} hover:text-red-500`
            }
          >
            Github
          </NavLink>
        </ul>

        <section className="buttonSection flex items-center gap-6 px-2 py-2 lg:order-2">
          <Link
            to="#"
            className="px-4 py-2 text-lg font-bold text-gray-800 hover:text-pink-600"
          >
            Log in
          </Link>

          <Link
            to="#"
            className="rounded-lg bg-orange-700 px-4 py-2 text-white [transition:all_500ms_ease] hover:bg-red-500 hover:[transition:all_750ms_ease]"
          >
            Get Started
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default Header;
