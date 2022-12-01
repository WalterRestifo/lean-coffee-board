import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Lean Coffee Board ☕️</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  color: #3d2520;
  background-color: #120905;
  padding: 5px;
  position: sticky;
  top: 0;
  z-index: 1;
`;
