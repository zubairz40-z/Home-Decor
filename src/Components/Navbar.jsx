import React from 'react';
import { Link, NavLink } from 'react-router';
import Wishlist from './../Pages/Wishlist';

const Navbar = () => {
  return (
    <div className="navbar  shadow-sm bg-amber-500">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          {/* Mobile menu items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/home" className="btn btn-ghost text-2xl font-bold">
          Z Decoré
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn bg-amber-400 rounded-xl border-0 hover:scale-105 transition">
          Visit Shop
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
