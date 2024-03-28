import React from "react";
import { useLoaderData } from "react-router-dom";
import TopBook from "../../components/TopBook/TopBook";
import { Helmet } from "react-helmet-async";

const TopBooks = () => {
  const books = useLoaderData();
  const BooksSort = books.sort((a, b) => b.rating - a.rating);
  const topBooks = BooksSort.slice(0, 5);

  return (
    <div>
      <Helmet>
        <title>Book Vibe | Top Books</title>
      </Helmet>
      <h2 className="text-center text-2xl lg:text-4xl font-bold bg-[#1313130D]  p-8 rounded-2xl">
        Top Books
      </h2>
      <div className="lg:w-8/12 space-y-6 mt-6 lg:mt-12">
        {topBooks.map((book, idx) => (
          <TopBook key={book.bookId} book={book} serial={idx}></TopBook>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
