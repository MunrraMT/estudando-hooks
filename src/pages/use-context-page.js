import Header from '../components/header';
import { AuthProvider } from '../components/use-context/auth-context';
import Main from '../components/use-context/main';

const UseContextPage = () => (
  <>
    <Header />
    <AuthProvider>
      <Main />
    </AuthProvider>
  </>
);
export default UseContextPage;
