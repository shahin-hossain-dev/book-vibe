import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 min-h-screen justify-center items-center">
        <button
          className="btn bg-[#59C6D2] text-white px-6"
          onClick={handleNavigate}
        >
          Go Home
        </button>
        <div>
          <img
            src={
              "https://st4.depositphotos.com/35300560/38956/v/450/depositphotos_389560970-stock-illustration-404-error-page-found-banner.jpg"
            }
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
