import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { booksDispatch } = useContext(BookContext);
  return (
    <li
      onClick={() =>
        booksDispatch({ type: "REMOVE_BOOK", payload: { id: book.id } })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
