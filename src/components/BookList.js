import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <h3 className="empty">Hello free time :)</h3>
  );
};

export default BookList;
