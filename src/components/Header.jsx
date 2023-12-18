// Header.js
import React, { useState } from "react";
import "../styles/Header.css";

export function Header(props) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
    console.log("headero");
    // fetchUserData(searchText);
  };

  return (
    <div className="header">
      {/* <img src="../assets/artsync.png" alt="Logo" className="logo" /> */}
      <h1 className="logo">ArtSync</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-icon" onClick={handleSearch}>
          &#128269;
        </button>
      </div>
      <div className="profile-icon">&#128100;</div>
    </div>
  );
}
