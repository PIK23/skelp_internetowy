import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './routes/ProductDetail';
import ProductList from './routes/ProductList'
import Header from './routes/Header';
import Cart from './routes/Cart';
import { UserProvider } from './routes/UserContext';
import Login from './routes/Login';
import RegistrationForm from './routes/Register';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
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
    <UserProvider>
      <Router>
        <Header />
        { data ? (
          <Routes>
            <Route path="/details/:id" element={<ProductDetail products={data} />} />
            <Route path="/" element={<ProductList products={data} />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        ): (
          <p>Ładu Ładu..</p>
        )}
        
      </Router>
    </UserProvider>
  </div>
  )
};

export default App;
