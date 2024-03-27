import React from "react";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const WishlistBook = ({ book }) => {
  const {
    bookId,
    image,
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
    <div>
      <div className="card flex-col lg:flex-row items-center card-side bg-base-100 shadow-xl border p-6">
        <div className="bg-[#1313130D] rounded-2xl py-8 px-6 w-[230px] flex justify-center items-center">
          <img src={image} alt="Book" />
        </div>
        {/* card body */}
        <div className="card-body py-0 space-y-2">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div className="flex items-center">
              <span className="font-bold">Tags: </span>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="p-2 me-3 font-medium rounded-xl text-[#23BE0A] bg-[#23BE0A0D]"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                <span className="flex items-center gap-2 ">
                  <IoLocationOutline className="text-xl" />
                  <span>Year of publishing : </span>
                </span>
                <span>{yearOfPublishing}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div>
              <span className="font-medium">
                {" "}
                <IoPeopleOutline className="inline text-xl me-2" />
                Publisher :
              </span>{" "}
              {publisher}
            </div>
            <div>
              <span>
                <IoDocumentTextOutline className="inline text-xl me-2" />
              </span>
              <span>Pages : {totalPages}</span>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center ">
            <span className="py-2 px-3 rounded-2xl bg-[#328EFF26] text-[#328EFF]">
              Category: {category}
            </span>
            <span className="py-2 px-3 rounded-2xl bg-[#FFAC3326] text-[#FFAC33]">
              Rating: {rating}
            </span>
            <Link to={`/book-details/${bookId}`}>
              <button className="btn bg-[#23BE0A] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;
