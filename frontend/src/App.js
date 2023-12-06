import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8009/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('Pobrane dane:', jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Błąd pobierania danych:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log('Render komponentu. Aktualne dane:', data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="HelloText">Hello</span>
        {}
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.nazwa}>{item.cena}</li>
            ))}
          </ul>
        )}
        <span className="CI/CD test">Hello</span>
      </header>
    </div>
  );
};

export default App;