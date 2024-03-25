import React from "react";
import banner from "../../assets/images/banner.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-[#1313130D] rounded-3xl">
      <div className="flex flex-col  lg:flex-row justify-around items-center gap-6 p-6 lg:p-12">
        <div className="flex items-center lg:items-start justify-center flex-col">
          <h1 className="text-3xl lg:text-6xl font-semibold leading-[40px] lg:leading-[70px]	">
            Books to freshen <br /> up your bookshelf
          </h1>
          <Link to={"/listed-books"}>
            <button className="btn bg-[#23BE0A] mt-8 text-white px-6 me-3">
              View The List{" "}
            </button>
          </Link>
        </div>
        <div>
          <img src={banner} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
