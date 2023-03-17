import React, { useState, useEffect } from 'react';
import React from "react";
import './../styles/App.css';

function NumberInput() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      const newSum = await sumNumbers(numbers);
      setSum(newSum);
    };
    calculateSum();
  }, [numbers]);

  const sumNumbers = async (numbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newSum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
        resolve(newSum);
      }, 1000);
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumbers((prevNumbers) => [...prevNumbers, value]);
  };

  return (
    <div>
      <label htmlFor="number-input">Enter numbers:</label>
      <input type="number" id="number-input" onChange={handleInputChange} />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App
