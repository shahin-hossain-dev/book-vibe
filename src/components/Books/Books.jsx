import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-12 lg:mt-24">
      <h2 className="text-center text-2xl lg:text-4xl font-bold">Books</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 lg:mt-12">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
