import { useState } from 'react';
import StyledForm from '../../styles/styled-form';
import { ButtonDelete, ButtonEdit, StyledList } from '../../styles/styled-list';
import StyledSection from '../../styles/styled-section';

const ToDoListB = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [operacao, setOperacao] = useState('adicionar');
  const [idEditar, setIdEditar] = useState(0);

  const salvaNovaTarefa = (e) => {
    setNovaTarefa(e.target.value);
  };

  const submeterTarefa = (e) => {
    e.preventDefault();

    if (operacao === 'adicionar') {
      if (novaTarefa === '') return;

      setTarefas([novaTarefa, ...tarefas]);
      setNovaTarefa('');
    }

    if (operacao === 'editar') {
      if (novaTarefa === '') return;

      setTarefas(
        tarefas.map((tarefa, index) => {
          if (index === idEditar) return novaTarefa;
          return tarefa;
        })
      );

      setNovaTarefa('');
      setOperacao('adicionar');
    }
  };

  const numeroAleatorio = () =>
    Math.floor(Math.random() * (99999 - 10000)) + 10000;

  const deletarTarefa = (e) => {
    setTarefas(tarefas.filter((__, index) => index !== e));
  };

  const editarTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa, index) => {
        if (index === id) {
          setOperacao('editar');
          setIdEditar(id);
          setNovaTarefa(tarefa);
        }
        return tarefa;
      })
    );
  };

  const MostraTarefas = () => (
    <ul>
      {tarefas.map((tarefa, id) => (
        <li key={numeroAleatorio()}>
          <p>{tarefa}</p>
          <footer>
            <ButtonDelete type='button' onClick={() => deletarTarefa(id)}>
              deletar
            </ButtonDelete>
            <ButtonEdit type='button' onClick={() => editarTarefa(id)}>
              editar
            </ButtonEdit>
          </footer>
        </li>
      ))}
    </ul>
  );

  return (
    <StyledSection>
      <h2>To Do List 02 - useState</h2>
      <StyledForm onSubmit={submeterTarefa}>
        <input
          type='text'
          value={novaTarefa}
          onChange={salvaNovaTarefa}
          placeholder='Qual sua nova tarefa?'
        />
        <button type='submit'>{operacao}</button>
      </StyledForm>
      <StyledList>
        <MostraTarefas />
      </StyledList>
    </StyledSection>
  );
};

export default ToDoListB;
