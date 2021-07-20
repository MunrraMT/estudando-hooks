import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: #345995;
  color: #fff;
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  nav {
    padding-top: 1rem;
    width: 100%;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
  }

  a:hover,
  .nav-active {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

export default StyledHeader;
