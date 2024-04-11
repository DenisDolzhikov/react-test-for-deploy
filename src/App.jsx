import './App.css';
import Layout from './components/Layout';
import Main from './components/Main';

function App() {
  return (
    <Layout children={<Main />} />
  );
}

export default App;
