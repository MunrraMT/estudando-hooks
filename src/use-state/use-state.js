import { useState } from 'react';
import StyledSection from '../styles/styled-section';
import StyledForm from '../styles/styled-form';
import StyledList from '../styles/styled-list';

const TodoListA = () => {
  const [inputValue, setInputValue] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const guardaNovaTarefa = (e) => setInputValue(e.target.value);

  const adicionaTarefas = (e) => {
    e.preventDefault();

    setTarefas([...tarefas, inputValue]);

    setInputValue('');
  };

  const numeroAleatorio = () => Math.floor(Math.random() * (99 - 10)) + 10;

  const MostraTarefas = () => (
    <StyledList>
      {tarefas.map((tarefa, index) => (
        <li key={`tarefa-${numeroAleatorio()}`}>
          {tarefa}
          <button
            onClick={() => {
              setTarefas(
                tarefas.filter((__, indexFilter) => indexFilter !== index)
              );
            }}
            type='button'
          >
            apagar
          </button>
        </li>
      ))}
    </StyledList>
  );

  return (
    <StyledSection>
      <h2>To Do List 01 - useState</h2>
      <StyledForm onSubmit={adicionaTarefas}>
        <input
          type='text'
          name='add-tarefa'
          id='add-tarefa'
          placeholder='Qual sua nova tarefa?'
          value={inputValue}
          onChange={guardaNovaTarefa}
        />
        <button type='submit'>Adicionar</button>
      </StyledForm>
      <MostraTarefas />
    </StyledSection>
  );
};

export default TodoListA;
