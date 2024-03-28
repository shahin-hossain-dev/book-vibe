import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaChevronDown } from "react-icons/fa";
import { getBooksFromLocalDB } from "../../utils/localDB";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  // const books = useLoaderData();
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const readBooksDB = getBooksFromLocalDB("read");
    const wishlistDB = getBooksFromLocalDB("wishlist");

    if (books.length > 0) {
      const readBooksMatched = books.filter((book) =>
        readBooksDB.includes(book.bookId.toString())
      );
      setReadBooks(readBooksMatched);

      const wishlistMatched = books.filter((book) =>
        wishlistDB.includes(book.bookId.toString())
      );
      setWishlistBooks(wishlistMatched);
    }
  }, [books]);

  // handle sorting

  const handleRatingSort = () => {
    const sortBook = readBooks.sort((a, b) => b.rating - a.rating);
    setBooks(sortBook);
  };
  const handleNumberOfPagesSort = () => {
    const sortBook = readBooks.sort((a, b) => b.totalPages - a.totalPages);
    setBooks(sortBook);
  };
  const handlePublishYearSort = () => {
    const sortBook = readBooks.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setBooks(sortBook);
  };
  return (
    <div>
      <Helmet>
        <title>Book Vibe | Listed Books</title>
      </Helmet>
      <h2 className="text-center text-2xl lg:text-4xl font-bold bg-[#1313130D] p-8 rounded-2xl">
        Books
      </h2>
      <div className="flex justify-center items-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white px-6">
            Sort by
            <FaChevronDown />
          </summary>

          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleRatingSort}>Rating</button>
            </li>
            <li>
              <button onClick={handleNumberOfPagesSort}>Number of Pages</button>
            </li>
            <li>
              <button onClick={handlePublishYearSort}>Publish Year</button>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-10">
        <Tabs>
          <TabList>
            <Tab>
              <span className="font-semibold">
                Read Books{" "}
                <span className="text-[#23BE0A]">
                  {readBooks.length > 0 && readBooks.length}
                </span>
              </span>
            </Tab>
            <Tab>
              <span className="font-semibold">
                Wishlist Books{" "}
                <span className="text-[#23BE0A]">
                  {wishlistBooks.length > 0 && wishlistBooks.length}
                </span>
              </span>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="flex flex-col gap-10 mt-10">
              <span className="text-2xl text-[#13131399]">
                {readBooks.length === 0 && "No Books Here"}
              </span>
              {readBooks.map((book) => (
                <ReadBook key={book.bookId} book={book}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-10 mt-10">
              <span className="text-2xl text-[#13131399]">
                {wishlistBooks.length === 0 && "No Books Here"}
              </span>
              {wishlistBooks.map((book) => (
                <WishlistBook key={book.bookId} book={book}></WishlistBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
