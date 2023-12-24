import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './routes/ProductDetail';
import ProductList from './routes/ProductList'
import logo from './logo.png';
import apple from './apple.jpg'
import phone from './phone.jpg'
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const sampleData = [
    {
      name: 'Apple',
      description: 'Definitely an apple aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      price: 3999.99,
      weight: '0.3 kg',
      dimensions: '10x5x2 cm',
      photo: apple,
    },
    {
      name: 'Phone',
      description: 'Some phone',
      price: 1499.99,
      weight: '0.5 kg',
      dimensions: '10x20x2 cm',
      photo: phone,
    }
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/products');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const jsonData = await response.json();
  //       console.log('Pobrane dane:', jsonData);
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Błąd pobierania danych:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log('Render komponentu. Aktualne dane:', data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Routes>
            <Route
              path="/details/:id"
              element={<ProductDetail products={sampleData} />}
            />
            <Route
              path="/"
              element={<ProductList products={sampleData} />}
            />
          </Routes>
      </Router>
      {/* <span className="CI/CD test">Hello</span> */}
      </header>
  </div>
  )
};

export default App;

// TODO
// ograniczyc liczbe wyswietlanych na jednej stronie
// poprawic fetch
// dodac przezroczystość do koszyka
// npm install react-router-dom

    //     {/* dodawanie przez fetch
    //     {data && <Content products={data} />}  */}