import React from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./assets/components/SearchForm/SearchForm";
import List from "./assets/components/List/List";
import { StyledWrapper, StyledHeader } from "./Style";
import { useState } from "react";

const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (inputValue) => {
    setSearchTerm(inputValue);
  };

  console.log(searchTerm);

  return (
    <StyledWrapper>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <StyledHeader>Hacker Stories</StyledHeader>
      </div>
      <SearchForm onSubmit={handleSearchTerm} />
      <List stories={stories} />
    </StyledWrapper>
  );
}

export default App;
