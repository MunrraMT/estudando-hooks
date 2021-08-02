import { useContext } from 'react';
import { AuthContext } from './auth-context';
import Login from './login';
import UserProfile from './user-profile';

const Main = () => {
  const { user } = useContext(AuthContext);

  return user ? <UserProfile /> : <Login />;
};

export default Main;
