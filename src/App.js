/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log('Executa sempre que o componenteß atualiza');
  // });

  // Executa apenas 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn); // Removendo lixo do efeito anterior
    };
  }, []);

  useEffect(() => {
    console.log('Executa toda vez que a dependência mudar');
  }, [counter]);

  return (
    <div className="App">
      <p>aasass</p>
      <h1>Contador1: {counter}</h1>
      <h1>Contador2: {counter2}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        + Counter2
      </button>
    </div>
  );
}

export default App;
