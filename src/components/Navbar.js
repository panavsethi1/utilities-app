import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h2>Currently you have {books.length} books to get through...</h2>
    </div>
  );
};

export default Navbar;
