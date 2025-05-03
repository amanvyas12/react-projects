import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h4>Start up with react project | Aman started builing the React App </h4>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
