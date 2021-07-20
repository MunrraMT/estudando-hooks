import styled from 'styled-components';

const StyledForm = styled.form`
  font-family: sans-serif;

  input {
    height: 2rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-right: none;
    padding: 0.5rem;
  }

  input:focus,
  input:focus + button {
    outline: 2px solid #345995;
  }

  button {
    height: 2rem;
    width: 5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-left: none;
    border-color: #345995;
    background-color: #345995;
    color: #fff;
  }
`;

export default StyledForm;
