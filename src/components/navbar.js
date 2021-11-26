import React from "react";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div>
        <h1>BLOGANT</h1>
      </div>
      <div>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li className="navbar-padding">About Us</li>
          <li className="navbar-padding">Latest News</li>
          <li className="navbar-padding">Blog</li>
          <li className="navbar-padding">Contact Us</li>
        </ul>
      </div>
      <div style={{ paddingLeft: "2rem" }}>
        <a className="navbar-padding" href="/">
          instagram
        </a>
        <a className="navbar-padding" href="/">
          twitter
        </a>
        <a className="navbar-padding" href="/">
          facebook
        </a>
        <a className="navbar-padding" href="/">
          sharechat
        </a>
      </div>
    </nav>
  );
};
