import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './routes/ProductDetail';
import ProductList from './routes/ProductList'
import Header from './routes/Header';
import Cart from './routes/Cart';
import { UserProvider } from './routes/UserContext';
import Login from './routes/Login';
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
      photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAD6+vqCgoLm5ub39/e+vr7e3t44ODja2tqxsbHq6uqNjY2rq6vu7u5vb2+dnZ1JSUnT09MRERFnZ2ciIiJ2dnZgYGALCwvFxcVSUlIpKSlXV1eVlZXKysqgoKAvLy98fHw+Pj4YGBiGhoZeJZHTAAADfUlEQVR4nO3c2XqiQBCGYRrBKK6oUeOu8f6vcYImDhBDRwqmC+d7T3NS/wP2Ut3E8wAAAAAAAAAAAAAAAAAAAAAAAAAAAPCvBV3fdQk1CqPZwZix6zJqE8zNxdx1ITUZjsynketS6hGZm6PrWmox/xvwOX+HcSqgabuupgaHdEDz4rqc6i0yAZeuy6neOBPwCQeal2xAM3FdUOVW2YAd1/VU7i33CJ9vJI2zAWPX9VSu+/S/wnM2YN91PdVbZgKuXJdTvSATcP2Em9/MSNoZui6nBqlNk1mErqupQ2rFtnddSz1uCWc916XU5PqWds5fO6aw1xs2+GX1J1FrsdksWu3bFnDY72+j4DqEvkSjeD1dvh7i2XjSxFG1PZum5oV+bp8bbNeZiWM62rkpsyx/b/IOg9vrGEanb3825rVJi/D2650Exsx3HzNguDve/eOHVVMaGuHspwhmutrcD/9p4Lr2X+muizJYtFxX/ws7QT7ThA64MKAxZ9cJLPJ9phIi1xkKhZLf4BfVC7qRvX6rjuZlXLuCgFvXIYr4B3sAG90Lm4E8oPLe27s44JvrCMXkv0Lti7aNNKD29UwoDbjU3nsTv6TqD/Tn9gzFXAew6ggDqj/D6C3tIQp1XSewyZ+bPcx1AKv84e6jtE8Vnve9u/YY1Svui7M9RCHt6xnPOwoT6t5UJKSb3+dPqLs9k5Am1H+eeBQmVL+kEY+l+u9lSOdD/Wsa8eZJeQfD8ybShOqXbfJ+vvYtvi9u6Ks/WYvtGSy0HwFLpwtjTq4jWFRwaKH87DCwJ7BS3m6TN/W1R2xVkFD35xfSTs1VR3PPrZKEH/Oi3qm/ijPuC7U9m2peU6N4r+gX3uh6gN7FTb+agIrXNhXcF0qo/Rl6+Y8ny9J8oUZ8qy2hexcl30Jp3wmLexn6/8eC/CEGriNYiIdT3b/ChHCH8a55IL0ayraJmufCL6JuRjO+C5ZsMVTfD77xy987acI7mig9KS5cV/5r23IB33WvZjLKrcCb9PlaWGYvrP9GTVqJ9rD29Wjew9fcZq4rfti9ATWeb/eD8Xl2Z9nTtCeYCHIXTuPoNlSGk2MuoO5u/o/Sjal5rn8W7lMPMta+Y/rRsH95jodF+96OYXI+Jd9yn1rKPyOxCLrdggeUfI//72oBAAAAAAAAAAAAAAAAAAAAAAAAAAD4P/wBAw4mTNsnTO8AAAAASUVORK5CYII=',
    },
    {
      name: 'Phone',
      description: 'Some phone',
      price: 1499.99,
      weight: '0.5 kg',
      dimensions: '10x20x2 cm',
      photo: 'data:image/jpeg;base64,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',
    }
  ];

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:1234/products');
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
        <Routes>
          <Route path="/details/:id" element={<ProductDetail products={sampleData} />} />
          <Route path="/" element={<ProductList products={sampleData} />} />
          {/* <Route path="/" element={<ProductList products={data} />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserProvider>
  </div>
  )
};

export default App;

// TODO
//odkomentować pobieranie przez fetch