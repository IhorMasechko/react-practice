import React, { useLayoutEffect } from "react";
import reactLogo from "./assets/react.svg";
import SearchForm from "./assets/components/SearchForm/SearchForm";
import List from "./assets/components/List/List";
import { StyledWrapper, StyledHeader } from "./Style";
import { useState, useEffect } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );
  const [stories, setStories] = useState([]);
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API}${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setStories(data.hits);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearchTerm = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const handleRemoveStory = (objectID) => {
    setStories(stories.filter((story) => story.objectID !== objectID));
  };

  return (
    <StyledWrapper>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <StyledHeader>Hacker Stories</StyledHeader>
      </div>
      <SearchForm onSubmit={handleSearchTerm} />
      {isLoading && <p>Loading</p>}
      {isError && <p>Something went wrong</p>}
      <List stories={stories} dismiss={handleRemoveStory} />
    </StyledWrapper>
  );
}

export default App;
