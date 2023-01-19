import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
      <nav>
        <Link to="/">
          <img src={require("../images/bakery-logo.jpg")} alt = "bakery-logo.jpg" className="nav--logo" /></Link>
        
        <ul><li><Link to="/about">About</Link></li></ul>
      </nav>
  );
}
