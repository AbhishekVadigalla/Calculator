import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  let [calculation, setCalculation] = useState("");

  return (
    <div className='abhi'>
      <div className='cal'>
        <h1 className="result">{calculation}</h1>

        <button onClick={() => setCalculation("")} className='span-two'>AC</button>
        <button onClick={() => setCalculation(String(calculation).slice(0, -1))}>DEL</button>
        <button onClick={() => setCalculation(calculation + "/")}>÷</button>
        <button onClick={() => setCalculation(calculation + "1")}>1</button>
        <button onClick={() => setCalculation(calculation + "2")}>2</button>
        <button onClick={() => setCalculation(calculation + "3")}>3</button>
        <button onClick={() => setCalculation(calculation + "*")}>*</button>
        <button onClick={() => setCalculation(calculation + "4")}>4</button>
        <button onClick={() => setCalculation(calculation + "5")}>5</button>
        <button onClick={() => setCalculation(calculation + "6")}>6</button>
        <button onClick={() => setCalculation(calculation + "+")}>+</button>
        <button onClick={() => setCalculation(calculation + "7")}>7</button>
        <button onClick={() => setCalculation(calculation + "8")}>8</button>
        <button onClick={() => setCalculation(calculation + "9")}>9</button>
        <button onClick={() => setCalculation(calculation + "-")}>-</button>
        <button onClick={() => setCalculation(calculation + ".")}>.</button>
        <button onClick={() => setCalculation(calculation + "0")}>0</button>
        <button onClick={() => setCalculation(Math.round(eval(calculation)))} className='span-two'>=</button>
      </div>
    </div>
  );
}

export default App;