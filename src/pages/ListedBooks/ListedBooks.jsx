import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaChevronDown } from "react-icons/fa";
import { getBooksFromLocalDB } from "../../utils/localDB";
import ReadBook from "../../components/ReadBook/ReadBook";

const ListedBooks = () => {
  // const books = useLoaderData();
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const readBooksDB = getBooksFromLocalDB("read");

    if (books.length > 0) {
      const readBooksMatched = books.filter((book) =>
        readBooksDB.includes(book.bookId.toString())
      );
      setReadBooks(readBooksMatched);
    }
  }, [books]);
  return (
    <div>
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-10">
        <Tabs>
          <TabList>
            <Tab>
              <span className="font-semibold">Read Books</span>
            </Tab>
            <Tab>
              <span className="font-semibold">Wishlist Books</span>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="flex flex-col gap-10 mt-10">
              {readBooks.map((book) => (
                <ReadBook key={book.bookId} book={book}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
