import { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../../styles/styled-button';
import StyledSection from '../../styles/styled-section';

const H3 = styled.h3`
  padding: 1rem;
  font-size: 2rem;
`;

const Footer = styled.footer`
  display: flex;
`;

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador((prevState) => prevState + 1);
  };

  const diminuir = () => {
    setContador((prevState) => prevState - 1);
  };

  return (
    <StyledSection>
      <h2>Hooks - useState</h2>
      <H3>{contador}</H3>
      <Footer>
        <StyledButton type='button' onClick={aumentar}>
          Aumentar
        </StyledButton>
        <StyledButton type='button' onClick={diminuir}>
          Diminuir
        </StyledButton>
      </Footer>
    </StyledSection>
  );
};

export default Contador;
