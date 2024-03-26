import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  const navigate = useNavigate();

  const handleBookDetails = () => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <div onClick={handleBookDetails}>
      <div className="card  p-6 rounded-2xl border h-full shadow-xl">
        <figure className="p-5 bg-[#F3F3F3] rounded-2xl">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="mt-5 space-y-4 flex-grow ">
          <div>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="p-2 me-3 font-medium rounded-xl text-[#23BE0A] bg-[#23BE0A0D]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <p className="font-semibold text-[#131313CC]">By : {author}</p>
          <div className="border-b-2 border-dashed border-[#13131326]"></div>
          <div className=" flex items-center justify-between">
            <span>{category}</span>
            <span className="flex gap-2 items-center">
              {<FaRegStar className="inline-block" />}
              <span>{rating}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
