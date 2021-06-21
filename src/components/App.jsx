import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ls from "local-storage";
import Home from "./Home";
import ReadingList from "./ReadingList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import KeeperHolder from "./KeeperHolder";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/keeper" exact component={KeeperHolder} />
        <Route path="/reading" exact component={ReadingList} />
      </Router>
    </div>
  );
}

export default App;
