import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header comp="Utilities" />
      <div className="home-box">
        <h1 className="home-header">
          <span className="home-header-1">Welcome to your Utilites app.</span>
          <span className="home-header-2">Do you wish to check your,</span>
        </h1>
        <div className="button-box">
          <a href="/keeper" className="btn">
            Notes
          </a>
          <a href="/reading" className="btn">
            Reading list
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
