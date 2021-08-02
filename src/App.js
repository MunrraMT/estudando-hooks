import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home-page';
import UseContextPage from './pages/use-context-page';
import UseStatePage from './pages/use-state-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/state'>
          <UseStatePage />
        </Route>
        <Route path='/context'>
          <UseContextPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
