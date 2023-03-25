import React from "react";
import Title from "./Title";
function List() {
  const fields = [
    {
      id: 1,
      title: "Sandip",
      description: "I Learn React",
    },
    {
      id: 2,
      title: "Sandip2",
      description: "I learnt also javascript",
    },
  ];

  const fieldList = fields.map((field) => <Title key={field.id}field={field} />);

  return <div>{fieldList}</div>;
}

export default List;