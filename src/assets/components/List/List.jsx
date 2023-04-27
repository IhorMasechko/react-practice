import Item from "./Item";

const List = ({ stories, dismiss }) => {
  return (
    <ul>
      {stories.map((item) => (
        <Item item={item} key={item.objectID} dismiss={dismiss} />
      ))}
    </ul>
  );
};

export default List;
