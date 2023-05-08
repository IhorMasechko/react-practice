import React from "react";

export const Counter = ({ increment }) => {
  return (
    <button onClick={increment} type="button">
      counter
    </button>
  );
};
