import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { booksDispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    booksDispatch({
      type: "ADD_BOOK",
      payload: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input className="btn-book" type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
