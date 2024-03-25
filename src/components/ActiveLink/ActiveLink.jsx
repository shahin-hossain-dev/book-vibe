import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#23BE0A] border border-[#23BE0A] text-lg font-medium  p-2 rounded-lg"
          : "text-lg  p-2  font-medium "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
