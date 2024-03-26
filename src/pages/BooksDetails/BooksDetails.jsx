import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));

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
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-24">
      <div className="lg:ms-10 bg-[#F3F3F3] rounded-2xl p-12 flex justify-center items-center">
        <img className="lg:h-[500px] lg:w-[400px]" src={image} alt="" />
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="text-xl font-medium">By: {author}</p>
        <p className="text-xl font-medium">{category}</p>
        <p>
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <p>
          <span className="font-bold">Tag:</span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="p-2 me-3 font-medium rounded-xl text-[#23BE0A] bg-[#23BE0A0D]"
            >
              #{tag}
            </span>
          ))}
        </p>
        <hr />
        <div className="grid grid-cols-2 gap-3 lg:pe-12">
          <div className="">
            <p className="text-lg font-semibold text-[#131313B3]">
              Number of Pages:
            </p>
            <p className="text-lg font-semibold text-[#131313B3]">Publisher:</p>
            <p className="text-lg font-semibold text-[#131313B3]">
              Year of Publishing:
            </p>
            <p className="text-lg font-semibold text-[#131313B3]">Rating:</p>
          </div>
          <div>
            <p className="font-semibold text-lg">{totalPages}</p>
            <p className="font-semibold text-lg">{publisher}</p>
            <p className="font-semibold text-lg">{yearOfPublishing}</p>
            <p className="font-semibold text-lg">{rating}</p>
          </div>
        </div>
        <div>
          <button className="btn me-3 border text-lg border-[#50B1C9] text-[#50B1C9]">
            Read
          </button>
          <button className=" btn  bg-[#50B1C9] text-lg text-white hover:text-[#50B1C9]">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
