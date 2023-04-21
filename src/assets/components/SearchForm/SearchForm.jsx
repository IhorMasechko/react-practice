import {
  StyledButtonLarge,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../../../Style";
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput
        id="search"
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};

export default SearchForm;
