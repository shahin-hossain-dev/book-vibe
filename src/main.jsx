import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import PagesToRead from "./pages/PagesToRead/PagesToRead.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import BooksDetails from "./pages/BooksDetails/BooksDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import TopBooks from "./pages/TopBooks/TopBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        // loader: () => fetch("../public/books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book-details/:id",
        element: <BooksDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/top-books",
        element: <TopBooks />,
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
