import React from "react";
import image from "./download3.jpg";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="heder__logo">
        <img className="heder__logo" src={image} alt="img" />
      </div>

      <div className="search_field">
        <input type="text" placeholder="Start your search.." />
        <SearchIcon />
      </div>

      <div className="profile">
        <h4> Become a Host</h4>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
