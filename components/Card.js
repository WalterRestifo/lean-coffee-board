import { useState } from "react";
import styled from "styled-components";
import { CiTrash } from "react-icons/ci";
import { SlPencil } from "react-icons/sl";
import { BiCheck } from "react-icons/bi";

export default function Card({
  thought,
  author,
  onRemoveListObj,
  id,
  onModifyListObj,
}) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const listObj = {
    thought: thought,
    author: author,
    id: id,
  };

  const modifiedListObj = {
    thought: "",
    author: "",
    id: "",
  };

  function handleSubmit(e) {
    e.preventDefault();
    modifiedListObj.thought = e.target.modifyThoughts.value;
    modifiedListObj.author = e.target.modifyAuthor.value;
    modifiedListObj.id = id;
    onModifyListObj(modifiedListObj);
    return setIsBeingEdited(false);
  }

  function handleClick() {
    return setIsBeingEdited(true);
  }

  if (isBeingEdited) {
    return (
      <StyledLi>
        <StyledEditForm onSubmit={handleSubmit}>
          <StyledInput
            aria-label="Modify your thoughts..."
            name="modifyThoughts"
            required
            placeholder={thought}
          ></StyledInput>
          <StyledInput
            aria-label="Modify your name"
            name="modifyAuthor"
            required
            placeholder={author}
          ></StyledInput>
          <StyledSaveButton>
            <BiCheck />
          </StyledSaveButton>
        </StyledEditForm>
      </StyledLi>
    );
  } else {
    return (
      <StyledLi>
        <StyledThoughtP>{thought}</StyledThoughtP>
        <StyledAuthorP>{author}</StyledAuthorP>
        <StyledRemoveButton
          aria-label="remove card"
          onClick={() => onRemoveListObj(listObj)}
        >
          <CiTrash />
        </StyledRemoveButton>
        <StyledEditButton aria-label="edit card" onClick={handleClick}>
          <SlPencil />
        </StyledEditButton>
      </StyledLi>
    );
  }
}

const StyledThoughtP = styled.p`
  font-size: larger;
`;

const StyledAuthorP = styled.p`
  color: #a2826a;
`;

const StyledLi = styled.li`
  border: 1px solid #3d2520;
  border-radius: 25px;
  text-align: center;
  list-style-type: none;
  width: 75vw;
  height: fit-content;
  margin-left: 5vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: relative;
  background-color: #bcb68e;
  color: #3d2520;
  box-shadow: 2px 2px 5px #120905;
`;

const StyledRemoveButton = styled.button`
  border-radius: 25px;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: #590202;

  color: #665e48;
  border: none;
  box-shadow: 1px 1px 1px #120905;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 3px;

  &:hover {
    box-shadow: 2px 2px 1px #120905;
    top: 14px;
    background-color: #610202;
    cursor: pointer;
  }

  &:active {
    background-color: #730303;
  }
`;

const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-top: 10px;
`;

const StyledSaveButton = styled.button`
  margin: 10px;
  position: relative;
  border-radius: 25px;
  border: none;
  background-color: #403e25;
  color: #a2826a;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 3px;
  box-shadow: 1px 1px 1px #120905;

  &:hover {
    background-color: #263829;
    bottom: 1px;
    box-shadow: 2px 2px 1px #120905;
    cursor: pointer;
  }
`;

const StyledEditButton = styled.button`
  margin-bottom: 10px;
  position: absolute;
  top: 45px;
  right: 15px;
  border-radius: 25px;
  border: none;
  background-color: #403e25;
  color: #a2826a;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 3px;
  box-shadow: 1px 1px 1px #120905;

  &:hover {
    background-color: #263829;
    top: 44px;
    box-shadow: 2px 2px 1px #120905;
    cursor: pointer;
  }
`;
