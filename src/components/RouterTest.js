// RouterTest.js
import React from "react";
// Link[Router-dom@6]
import { Link } from "react-router-dom";

const RouterTest = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/diary"}>Diary</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/edit"}>Edit</Link>
    </div>
  );
};

export default RouterTest;
