import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState("");
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    if (process.env.REACT_APP_API_URL === "") {
      process.env.REACT_APP_API_URL = "http://localhost:5008"
    }

    fetch(`${process.env.REACT_APP_API_URL}/color` as string)
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log(data);
        setColor(data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: color }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            If you see me, you did it well!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
