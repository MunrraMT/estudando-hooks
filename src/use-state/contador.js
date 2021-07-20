import { useState } from 'react';
import StyledSection from '../styles/styled-section';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
  };

  return (
    <StyledSection>
      <h2>Hooks - useState</h2>
      <h3>{contador}</h3>
      <button type='button' onClick={aumentar}>
        Aumentar
      </button>
      <button type='button' onClick={diminuir}>
        Diminuir
      </button>
    </StyledSection>
  );
};

export default Contador;
