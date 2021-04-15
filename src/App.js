import React, { useState } from "react";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const SearchResultContext = React.createContext("");

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <SearchResultContext.Provider
        value={{ searchResult, setSearchResult, searchString, setSearchString }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route
              path="/products"
              component={() => (
                <SearchResult
                  searchString={searchString}
                  result={searchResult}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </SearchResultContext.Provider>
    </>
  );
};

export default App;
