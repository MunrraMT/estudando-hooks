import Header from '../components/header';
import Contador from '../components/use-state/contador';
import ToDoList from '../components/use-state/todo-list-a';
import ToDoListB from '../components/use-state/todo-list-b';

const UseStatePage = () => (
  <>
    <Header />
    <main>
      <Contador />
      <ToDoList />
      <ToDoListB />
    </main>
  </>
);

export default UseStatePage;
