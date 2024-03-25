const getBooksFromLocalDB = () => {
  const storedBooks = localStorage.getItem("books");

  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const setBookToLocalDB = (id) => {
  const storedBooks = getBooksFromLocalDB();
  const exist = storedBooks.find((bookId) => bookId === id);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

export { getBooksFromLocalDB, setBookToLocalDB };
