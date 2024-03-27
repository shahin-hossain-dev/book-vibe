const getBooksFromLocalDB = (prop) => {
  const storedBooks = localStorage.getItem(prop);

  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const setBookToLocalDB = (id, prop) => {
  const storedBooks = getBooksFromLocalDB(prop);
  const exist = storedBooks.find((bookId) => bookId === id);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem(prop, JSON.stringify(storedBooks));
  }
};

const removeBookToLocalDB = (id, prop) => {
  const storedBooks = getBooksFromLocalDB(prop);
  const newBooks = storedBooks.filter((bookId) => bookId !== id);
  localStorage.setItem(prop, JSON.stringify(newBooks));
};

export { getBooksFromLocalDB, setBookToLocalDB, removeBookToLocalDB };
