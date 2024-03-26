import React from "react";

const ReadBook = ({ book }) => {
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
    <div>
      <div className="card flex-col lg:flex-row items-center card-side bg-base-100 shadow-xl border p-6">
        <div className="bg-[#1313130D] rounded-2xl p-6 w-[230px] flex justify-center items-center">
          <img src={image} alt="Book" />
        </div>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
