import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page';
import UseStatePage from './pages/use-state-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/state'>
          <UseStatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
