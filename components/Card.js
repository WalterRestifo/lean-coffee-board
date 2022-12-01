import styled from "styled-components";

export default function Card({ thought, author }) {
  return (
    <li>
      <StyledThoughtP>{thought}</StyledThoughtP>
      <StyledAuthorP>{author}</StyledAuthorP>
    </li>
  );
}

const StyledThoughtP = styled.p`
  font-size: larger;
`;

const StyledAuthorP = styled.p`
  color: orange;
`;
