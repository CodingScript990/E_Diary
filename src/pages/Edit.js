// Edit.js
import React from "react";
// react-router-dom
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  // react router navigate
  const navigate = useNavigate();
  // searchParams => custom hook
  const [searchParams, setSearchParams] = useSearchParams();
  // query string
  const id = searchParams.get("id");
  console.log("id  : ", id);
  const mode = searchParams.get("mode");
  console.log("mode  : ", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>This is Edit!</p>
      <button onClick={() => setSearchParams({ who: "kim" })}>QS</button>
      <button onClick={() => navigate("/home")}>home</button>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default Edit;
