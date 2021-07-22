import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  min-width: 12rem;
  width: 40%;

  li {
    min-width: 7rem;
    background-color: #ddd;
    margin-top: 0.5rem;
    padding: 0.25rem;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    text-transform: capitalize;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  footer {
    width: 7.25rem;

    display: flex;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  background-color: #345995;
  border: none;
  border-radius: 0.5rem;
  width: 3.5rem;
  height: 1.5rem;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
`;

const ButtonDelete = styled(Button)`
  :hover {
    background-color: #bb4430;
  }
`;

const ButtonEdit = styled(Button)`
  :hover {
    background-color: #3e6259;
  }
`;

const BtnText = styled.button`
  border: none;
  background: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { StyledList, ButtonDelete, ButtonEdit, BtnText };
