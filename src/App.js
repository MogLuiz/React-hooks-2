/* eslint-disable no-unused-vars */
import P from 'prop-types';
import './App.css';
import React, { useCallback, useMemo, useState } from 'react';

const Button = ({ incrementButton }) => {
  console.log('Eu também estou renderizando');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Estou renderizando outra vez');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>Contador1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
