import { useContext } from 'react';
import { AuthContext } from './auth-context';

const Login = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setUser({ name: 'André' });
      }}
      type='button'
    >
      Logar
    </button>
  );
};

export default Login;
