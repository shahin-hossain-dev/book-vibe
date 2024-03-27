import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const TopBook = ({ book, serial }) => {
  const {
    bookId,
    image,
    review,
    tags,
    bookName,
    author,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="flex bg-[#1313130D] p-5 shadow-xl rounded-2xl">
      <h2 className="text-2xl">{serial + 1}.</h2>
      <div className=" flex items-start flex-col lg:flex-row gap-5 p-5 ">
        <img className="" src={image} alt="Book" />
        <div className="space-y-4">
          <h2 className="text-3xl">{bookName}</h2>
          <h3 className="text-2xl text-[#13131399]">By. {author} </h3>
          <p>
            <span className="font-bold">
              Summery: <br />
            </span>{" "}
            {review.slice(0, 300)}
            ...{" "}
            <Link to={`/book-details/${bookId}`} className="text-[#23BE0A]">
              Read More
            </Link>
          </p>
          <span className="flex items-center text-xl gap-3 font-light">
            <FaStar className="text-[#13131399]" />

            <span>Rating: {rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBook;
