import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home으로 이동</Link>
        </li>
        <li>
          <Link to="/profile">Profile Page로 이동</Link>
        </li>
        <li>
          <Link to="/board">Board Page로 이동</Link>
        </li>
      </ul>
    </nav>
  );
}
