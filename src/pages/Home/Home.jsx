import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Book Vibe | Home</title>
      </Helmet>

      <Banner />
      <Books />
    </div>
  );
};

export default Home;
