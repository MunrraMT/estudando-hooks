import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  font-family: sans-serif;
  width: 12rem;

  li {
    min-width: 7rem;
    background-color: #ddd;
    padding: 0.25rem;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    text-transform: capitalize;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: orangered;
    border: none;
    border-radius: 0.5rem;
    width: 3.5rem;
    height: 1.5rem;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: red;
  }
`;

export default StyledList;
