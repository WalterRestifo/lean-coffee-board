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
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input name="thoughts" placeholder="Type your thoughts..."></input>
      <input name="author" placeholder="Your name"></input>
      <StyledButton>+</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 25px;
`;
