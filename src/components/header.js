import { NavLink } from 'react-router-dom';
import StyledHeader from '../styles/styled-header';

const Header = () => (
  <StyledHeader>
    <h1>Estudando Hooks</h1>
    <nav>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='nav-active'>
            home
          </NavLink>
        </li>

        <li>
          <NavLink exact to='/state' activeClassName='nav-active'>
            useState
          </NavLink>
        </li>

        <li>
          <NavLink exact to='/context' activeClassName='nav-active'>
            useContext
          </NavLink>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);

export default Header;
