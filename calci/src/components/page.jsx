import React from 'react'
import { useState } from 'react';
import '../App.css';

const page = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
  
    const handleClick = (value) => {
      setInput((prev) => prev + value); // Append value to input
    };
  
    const clearInput = () => {
      setInput("");
      setResult("");
    };
  
    const calculateResult = () => {
      try {
        setResult(eval(input)); // Evaluate the expression (Use with caution)
      } catch {
        setResult("Error");
      }
    };
    return (
        <div className="calculator">
          <h2>React Calculator</h2>
          <input type="text" value={input} readOnly />
          <div className="buttons">
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((btn) => (
              <button key={btn} onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}>
                {btn}
              </button>
            ))}
            <button className="clear" onClick={clearInput}>
              C
            </button>
          </div>
          <h3>Result: {result}</h3>
        </div>
      );
    };
    

export default page