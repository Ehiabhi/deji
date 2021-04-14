import React, { useState, useContext } from "react";
import styled from "styled-components";
import { categories } from "./Category";
import { withRouter } from "react-router-dom";
import { SearchResultContext } from "../App";

const Search = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
`;

const Input = styled.input`
  width: 85%;
  background: #f0f0f0;
  border: 0;
  height: 3em;
  outline: 0;
  text-indent: 5px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled.button`
  background: #f8de4b;
  width: 15%;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const SearchBar = ({ history, ...props }) => {
  const [searchInput, setSearchInput] = useState("");

  const { searchResult, setSearchResult } = useContext(SearchResultContext);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "searchText") {
      setSearchInput(value);
    }
  };

  const handleSearchOperation = (e) => {
    if (!Boolean(searchInput)) {
      return false;
    } else {
      const categoriesName = categories.map((productName) =>
        productName.name.toLocaleLowerCase()
      );

      const result = categoriesName.filter((cat) =>
        cat.includes(searchInput.toLocaleLowerCase())
      );
      if (result.length === 0) {
        alert("No items match your search");
      } else {
        setSearchResult(result);
        history.push("/products");
      }

      // categories.includes(searchInput);
    }
  };

  return (
    <>
      <Search>
        <Input
          value={searchInput}
          onChange={handleSearchInput}
          type="text"
          name="searchText"
          placeholder="Search for products..."
        />
        <SearchButton onClick={handleSearchOperation}>
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
        </SearchButton>
      </Search>
    </>
  );
};

export default withRouter(SearchBar);
