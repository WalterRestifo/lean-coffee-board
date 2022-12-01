import Form from "../components/Form";
import Header from "../components/Header";
import { useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";

export default function HomePage() {
  const [list, setList] = useState([]);

  function handleAddNewListObj(newListObj) {
    setList([...list, newListObj]);
  }

  function handleRemoveListObj(listObj) {
    const newList = list.filter(({ thought, author, id }) => {
      return id !== listObj.id;
    });
    setList(newList);
  }

  function handleModifyListObj(modifiedListObj) {
    const modifiedList = list.filter(({ thought, author, id }) => {
      return id !== modifiedListObj.id;
    });
    return setList([...modifiedList, modifiedListObj]);
  }

  return (
    <StyledDiv>
      <Header />
      <StyledUl>
        {list.map(({ thought, author, id }) => {
          return (
            <Card
              key={id}
              id={id}
              thought={thought}
              author={author}
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
