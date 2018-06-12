import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
//Link--works like a tag, generates a tag

const Landing = () => (
  <div className="landing">
    <h1>MyVideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">Or browse all</Link>
  </div>
);

export default Landing;
