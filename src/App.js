import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState();
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';
  //
  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCount((c) => c + 10);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador {count}</h1>

        <div>
          <button type="button" onClick={handleIncrement}>
            +10
          </button>
          <button type="button" onClick={() => setCount(count - 10)}>
            -10
          </button>
        </div>

        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </header>
    </div>
  );
}

export default App;
