import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './routes/ProductDetail';
import logo from './logo.png';
import apple from './apple.jpg'
import phone from './phone.jpg'
import cart from './cart.png'
import './App.css';

const ProductItem = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Product added to cart: ${product.name}`);
  };

  return (
    <tr>
      <td><Link to={`/product/${product.name}`}>{product.name}</Link></td>
      <td className="description">{product.description}</td>
      <td>{product.price}</td>
      <td>{product.weight}</td>
      <td>{product.dimensions}</td>
      <td><img alt={product.name} src={product.photo} height="64px" /></td>
      <td>
        <button onClick={handleAddToCart}>
          <img type="submit" alt="Add to cart" src={cart} height="64px" />
        </button>
      </td>
    </tr>
  );
};

const Content = ({ products }) => {
  return (
    <Router>
    <div className="Content">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Dimensions</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </tbody>
      </table>
      <Routes>
          {products.map((product) => (
            <Route
              key={product.name}
              path={`/product/${product.name}`}
              element={<ProductDetail product={product} />}
            />
          ))}
        </Routes>
    </div>
    </Router>
  )
};

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
        <Content products={sampleData} />

        {/* dodawanie przez fetch
        {data && <Content products={data} />}  */}

        <span className="CI/CD test">Hello</span>
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