import { useState } from 'react';
import SectionBase from '../components/section-base';

const LearningUseState = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <SectionBase>
        <h2>Hooks - useState</h2>
        <h3>{contador}</h3>
        <button type='button' onClick={aumentar}>
          Aumentar
        </button>
        <button type='button' onClick={diminuir}>
          Diminuir
        </button>
      </SectionBase>

      <SectionBase>
        <h2>To Do List - useState</h2>
      </SectionBase>
    </>
  );
};

export default LearningUseState;
