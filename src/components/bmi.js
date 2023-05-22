import React, { useState } from 'react';
import'./bmi.css'

function Bmiapp() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  let calbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid height and width');
    } else {
      let bmi = (weight / (height * height) );
      setBmi(bmi.toFixed(1));
    }
    if (bmi < 18) {
      setMessage('You are underweight');
    } else if (bmi >= 18 && bmi < 25) {
      setMessage('You are in a healthy state');
    } else {
      setMessage('You are overweight');
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calbmi}><br />
          <div>

            <label>Weight (Kgs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div><br />
          <div>
            <label>Height (Meters)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div><br />
          <div>
            
          <label>Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
          </div>
        </form>
        <div className='center'>
          <h4>Your BMI is: {bmi}</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Bmiapp;
