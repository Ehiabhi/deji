import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = ({ result, searchString, ...props }) => {
  useEffect(() => {
    const searchResult = document.getElementById("searchResult");
    result.forEach((res, index) => {
      searchResult.innerHTML += `
      <div key=${index} style={{justifyContent: "space-between", alignItems: "center", marginBottom: "5em"}} key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: ".5em",
            }}
            >
            <img src=${res.image} alt=&{res.image} style={{
              backgroundImage: "linear-gradient(transparent, rgba(0,0,0,.3))
            }}/>
            <div>
              <Span>${res.name}</Span>
              <Span className="price">${res.price}</Span>
            </div>
          </div>
          <Button>+ Add</Button>
        </div>`;
    });
  });
  return (
    <>
      <div id="searchString">
        <Link to="/">
          <img id="back_img" src="./back.png" alt="back_navigation" />
          <span>{searchString}</span>
        </Link>
      </div>
      <div id="searchResult"></div>
    </>
  );
};

export default Main;
