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
`;

const StyledAuthorP = styled.p`
  color: orange;
`;

const StyledLi = styled.li`
  border: 1px solid black;
  text-align: center;
  list-style-type: none;
  width: 75vw;
  height: fit-content;
`;

const StyledButton = styled.button`
  border-radius: 50%;
`;
