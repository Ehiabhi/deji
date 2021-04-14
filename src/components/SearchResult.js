import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = ({ result, ...props }) => {
  useEffect(() => {
    const searchResult = document.getElementById("searchResult");
    result.forEach((res) => {
      searchResult.innerHTML += `<div>${res}</div>`;
    });
  });
  return (
    <>
      <Link to="/">Back</Link>
      <div>Search Result</div>
      <div id="searchResult"></div>
    </>
  );
};

export default Main;
