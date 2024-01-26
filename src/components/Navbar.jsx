import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const [nav, setNav] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
    setNav(!nav);
  };

  return (
    <div>
      {nav ? (
        <div className="nav-container">
          <h1 className="branding">Logo</h1>
          <ul className="nav-items">
            <li className="items">Home</li>
            <li className="items">Genres</li>
            <li className="items">Trailers</li>
          </ul>
          <div className="hamburger" onClick={handleIcon}>
            {icon ? <GiHamburgerMenu /> : <IoMdClose className="close" />}
          </div>
        </div>
      ) : (
        <div>
          <ul className="mobile-nav">
            <div className="hamburger-mobile" onClick={handleIcon}>
              {icon ? <GiHamburgerMenu /> : <IoMdClose className="close" />}
            </div>
            <div>
              <h1>Logo</h1>
            </div>
            <li className="mobile-items items">Home</li>
            <li className="mobile-items items">Genres</li>
            <li className="mobile-items items">Trailers</li>
            <div className="mobile-btns">
              <button className="sign">SignIn</button>
              <button className="sign">SignUp</button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};
