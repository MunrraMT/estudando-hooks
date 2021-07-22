import Header from '../components/header';
import Contador from '../use-state/contador';
import ToDoList from '../use-state/todo-list-a';
import ToDoListB from '../use-state/todo-list-b';
import ToDoListC from '../use-state/todo-list-c';

const UseStatePage = () => (
  <>
    <Header />
    <main>
      <Contador />
      <ToDoList />
      <ToDoListB />
      <ToDoListC />
    </main>
  </>
);

export default UseStatePage;
