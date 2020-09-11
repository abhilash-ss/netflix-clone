import React, { FunctionComponent, useEffect, useState } from "react";

import "./Navbar.scss";

const Navbar: FunctionComponent = () => {
  const [show, handleShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll", () => {});
    // };
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        className="navbar__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Navbar;
