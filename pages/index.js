import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";

export default function HomePage() {
  const [list, setList] = useState([
    {
      thought: "will I work correctly?",
      author: "Walter",
    },
    {
      thought: "I hope so",
      author: "wieder Walter",
    },
  ]);

  function handleAddNewListObj(newListObj) {
    setList([...list, newListObj]);
  }

  function handleRemoveListObj(ListObj) {
    const newList = list.filter(({ thought, author }) => {
      return !(thought === ListObj.thought && author === ListObj.author);
    });
    setList(newList);
  }
  console.log(list);
  return (
    <>
      <Header />
      <styledUl>
        {list.map(({ thought, author }) => {
          return (
            <Card
              key={thought + author}
              thought={thought}
              author={author}
              onRemoveListObj={handleRemoveListObj}
            />
          );
        })}
      </styledUl>
      <hr />
      <Form onAddNewListObj={handleAddNewListObj} />
    </>
  );
}

const styledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
