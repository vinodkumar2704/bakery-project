import React from 'react';

export default function Header(props) {
  return (
    <header>
      <nav>
        <a href="#/">
          <img src={require("../images/bakery-logo.jpg")} className="nav--logo" />
        </a>
      </nav>
    </header>
  );
}
