import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookContextProvider from "../contexts/BookContext";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";
import Navbar from "./Navbar";

function ReadingList() {
  return (
    <div>
      <Header comp="Book list" />
      <div className="reading">
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div>
    </div>
  );
}

export default ReadingList;
