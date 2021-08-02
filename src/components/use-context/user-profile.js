import { useContext } from 'react';
import { AuthContext } from './auth-context';

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

export default UserProfile;
