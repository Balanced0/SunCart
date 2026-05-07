"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto px-4 flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
              <li>
                <NavLink href="/profile">My Profiles</NavLink>
              </li>
              {!session && (
                <>
                  <li>
                    <NavLink href="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink href="/register">Register</NavLink>
                  </li>
                </>
              )}
              {session && (
                <>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-gray-500 font-bold w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="text-xl flex items-center justify-center cursor-pointer">
            <Image src={logo} alt="Site Logo" width={80} height={80} />
            <h3 className="text-orange-500 font-extrabold text-2xl">SunCart</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/products">Products</NavLink>
            </li>
            <li>
              <NavLink href="/profile">My Profiles</NavLink>
            </li>
          </ul>
        </div>
        {session ? (
          <div className="navbar-end lg:flex gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full overflow-hidden">
                <img alt={session.user.name} src={session.user.image} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-extrabold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end hidden lg:flex gap-4">
            <Link href="/login" className="btn rounded-xl">
              Login
            </Link>
            <Link
              href="/register"
              className="btn rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-extrabold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
