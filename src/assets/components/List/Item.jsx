import { StyledItem, StyledSpan, StyledButtonSmall } from "../../../Style";

const Item = ({ item }) => {
  const { url, objectID, title, author, num_comments, points } = item;
  return (
    <StyledItem>
      <StyledSpan width="40%">
        <a href={url}>{title}</a>
      </StyledSpan>
      <StyledSpan width="30%">{author}</StyledSpan>
      <StyledSpan width="10%">{num_comments}</StyledSpan>
      <StyledSpan width="10%">{points}</StyledSpan>
      <StyledSpan width="10%">
        <StyledButtonSmall type="button">Dismiss</StyledButtonSmall>
      </StyledSpan>
    </StyledItem>
  );
};

export default Item;
