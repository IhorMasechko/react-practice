import { StyledItem, StyledSpan, StyledButtonSmall } from "../../../Style";

const Item = ({ item, dismiss }) => {
  const { url, objectID, title, author, num_comments, points } = item;

  const removeStory = () => {
    dismiss(objectID);
  };
  return (
    <StyledItem>
      <StyledSpan width="40%">
        <a href={url}>{title}</a>
      </StyledSpan>
      <StyledSpan width="30%">{author}</StyledSpan>
      <StyledSpan width="10%">{num_comments}</StyledSpan>
      <StyledSpan width="10%">{points}</StyledSpan>
      <StyledSpan width="10%">
        <StyledButtonSmall type="button" onClick={removeStory}>
          Dismiss
        </StyledButtonSmall>
      </StyledSpan>
    </StyledItem>
  );
};

export default Item;
