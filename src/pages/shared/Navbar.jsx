import React from "react";
import { NavLink } from "react-router-dom";
import ActiveLink from "../../components/ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-12">
      <div className="navbar-start">
        <p className=" font-semibold text-3xl">Book Vibe</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2  px-1">
          <li>
            <ActiveLink to={"/"}>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/listed-books"}>Listed Books</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/pages-to-read"}>Page to Read</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/blogs"}>Blogs</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/top-books"}>Top Books</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <button className="btn bg-[#23BE0A] text-white px-6 me-3">
          Sign In{" "}
        </button>
        <button className="btn bg-[#59C6D2] text-white px-6 ">Sign Up </button>
      </div>
    </div>
  );
};

export default Navbar;
