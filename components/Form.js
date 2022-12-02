import styled from "styled-components";

export default function Form({ onAddNewListObj }) {
  function handleSubmit(e) {
    const newListObj = {
      name: e.target.name.value,
      text: e.target.text.value,
    };

    e.preventDefault();
    onAddNewListObj(newListObj);
    e.target.reset();
    e.target.text.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextInput
        aria-label="Type your thoughts..."
        name="text"
        placeholder="Type your thoughts..."
        required
      ></StyledTextInput>
      <StyledNameInput
        aria-label="Your name"
        name="name"
        placeholder="Your name"
        required
      ></StyledNameInput>
      <StyledButton aria-label="add new card">+</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: sticky;
  bottom: 0;

  border: 1px solid black;
  min-height: 10vh;

  padding-top: 3vh;
  padding-bottom: 3vh;

  background-color: #120905;
  color: #a2826a;

  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 25px;
  background-color: #403e25;
  color: #a2826a;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #263829;
    cursor: pointer;
  }
`;

const StyledNameInput = styled.input`
  width: 80px;
`;

const StyledTextInput = styled.input`
  width: auto;
`;
