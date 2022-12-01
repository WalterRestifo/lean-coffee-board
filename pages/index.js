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
      author: "Walter again",
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
    <StyledDiv>
      <Header />
      <StyledUl>
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
      </StyledUl>
      <Form onAddNewListObj={handleAddNewListObj} />
    </StyledDiv>
  );
}

const StyledUl = styled.ul`
  height: 100vh;
`;

const StyledDiv = styled.div`
  position: relative;
  background-color: #665e48;
`;
