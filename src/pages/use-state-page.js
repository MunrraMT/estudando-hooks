import Header from '../components/header';
import Contador from '../use-state/contador';
import TodoListA from '../use-state/use-state';

const UseStatePage = () => (
  <>
    <Header />
    <main>
      <Contador />
      <TodoListA />
    </main>
  </>
);

export default UseStatePage;
