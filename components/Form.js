import styled from "styled-components";

export default function Form({ onAddNewListObj }) {
  function handleSubmit(e) {
    const newListObj = {
      thought: e.target.thoughts.value,
      author: e.target.author.value,
    };

    e.preventDefault();
    onAddNewListObj(newListObj);
    e.target.reset();
    e.target.thoughts.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        aria-label="Type your thoughts..."
        name="thoughts"
        placeholder="Type your thoughts..."
        required
      ></input>
      <input
        aria-label="Your name"
        name="author"
        placeholder="Your name"
        required
      ></input>
      <StyledButton aria-label="add new card">+</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: sticky;
  bottom: 0;

  border: 1px solid black;
  min-height: 7vh;

  padding-top: 2vh;
  padding-bottom: 2vh;

  background-color: #120905;
  color: #a2826a;

  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 25px;
  background-color: #403e25;
  color: #a2826a;

  &:hover {
    background-color: #263829;
  }
`;
