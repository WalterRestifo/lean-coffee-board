import styled from "styled-components";

export default function Card({ thought, author, onRemoveListObj }) {
  const ListObj = {
    thought: thought,
    author: author,
  };
  return (
    <StyledLi>
      <StyledThoughtP>{thought}</StyledThoughtP>
      <StyledAuthorP>{author}</StyledAuthorP>
      <StyledButton onClick={() => onRemoveListObj(ListObj)}>X</StyledButton>
    </StyledLi>
  );
}

const StyledThoughtP = styled.p`
  font-size: larger;
  text-transform: capitalize;
`;

const StyledAuthorP = styled.p`
  color: #a2826a;
  text-transform: capitalize;
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
  box-shadow: 5px 5px 5px;
`;

const StyledButton = styled.button`
  border-radius: 25px;
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: #590202;

  color: #665e48;
  border: none;
  box-shadow: 1px 1px 1px #3d2520;

  &:hover {
    box-shadow: 2px 2px 1px #3d2520;
    top: 14px;
    background-color: #610202;
  }

  &:active {
    background-color: #730303;
  }
`;
