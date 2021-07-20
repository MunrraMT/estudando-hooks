import { useState } from 'react';
import SectionBase from '../components/section-base';

const LearningUseState = () => {
  const [contador, setContador] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [tarefas, setTarefas] = useState([]);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
  };

  const addTarefa = (e) => {
    e.preventDefault();

    setTarefas([...tarefas, e.target[0].value]);

    e.target[0].value = '';
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
        <form onSubmit={addTarefa}>
          <label htmlFor='add-tarefa'>
            <input
              type='text'
              name='add-tarefa'
              id='add-tarefa'
              placeholder='Qual sua nova tarefa'
            />
          </label>
          <button type='submit'>Adicionar</button>
        </form>
        <ul>
          {tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </SectionBase>
    </>
  );
};

export default LearningUseState;
