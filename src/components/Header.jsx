import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1>
          <HighlightIcon /> {props.comp}
        </h1>
      </Link>
    </header>
  );
}

export default Header;
