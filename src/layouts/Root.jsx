import React from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="w-[95%] lg:w-10/12 mx-auto font-base">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
