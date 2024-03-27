import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import PagesToRead from "./pages/PagesToRead/PagesToRead.jsx";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import BooksDetails from "./pages/BooksDetails/BooksDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>Page Not Found</h2>,
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
      },
      {
        path: "/book-details/:id",
        element: <BooksDetails />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
