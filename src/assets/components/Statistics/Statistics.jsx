import React from "react";

export const Statistics = ({ total, isDoneTodos }) => {
  console.log("Statistics");
  return (
    <h1>
      Statistic: {isDoneTodos} / {total}
    </h1>
  );
};
