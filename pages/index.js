import Form from "../components/Form";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";

export default function HomePage() {
  const [list, setList] = useState([]);

  async function handleAddNewListObj(newListObj) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListObj),
      }
    );
    getQuestions();
  }

  async function handleRemoveListObj(id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
    getQuestions();
  }

  async function handleModifyListObj(modifiedListObj) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" +
        modifiedListObj.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedListObj),
      }
    );
    getQuestions();
  }

  async function getQuestions() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    if (!response.ok) {
      return console.error(
        "Error with the response of the fetch. Response status: ",
        response.status
      );
    } else {
      const questionList = await response.json();
      setList(questionList);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <StyledDiv>
      <Header />
      <StyledUl>
        {list.map(({ text, name, id }) => {
          return (
            <Card
              key={id}
              id={id}
              text={text}
              name={name}
              onRemoveListObj={handleRemoveListObj}
              onModifyListObj={handleModifyListObj}
            />
          );
        })}
      </StyledUl>
      <Form onAddNewListObj={handleAddNewListObj} />
    </StyledDiv>
  );
}

const StyledUl = styled.ul`
  min-height: 77vh;
`;

const StyledDiv = styled.div`
  position: relative;
  background-color: #665e48;
`;
