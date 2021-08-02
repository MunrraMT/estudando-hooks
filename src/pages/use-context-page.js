/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import Header from '../components/header';

const AuthContext = createContext([false, () => {}]);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

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

const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <section>
      <h2>{`Olá ${user.name}`}</h2>
      <button onClick={() => setUser(false)} type='button'>
        Sair
      </button>
    </section>
  );
};

const Main = () => {
  const { user } = useContext(AuthContext);

  return user ? <UserProfile /> : <Login />;
};

const UseContextPage = () => (
  <>
    <Header />
    <AuthProvider>
      <Main />
    </AuthProvider>
  </>
);
export default UseContextPage;
