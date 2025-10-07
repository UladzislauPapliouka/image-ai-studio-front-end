import './App.css';
import { Header } from './widgets/header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <h1 className="bg-">Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
    </div>
  );
};

export default App;
