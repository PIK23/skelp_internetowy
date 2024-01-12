import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';
import { useNavigate } from 'react-router-dom';

const Summmary = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      getProductsFromApi()
        .then((data) => {
            setProducts(data);
            calculateTotalPrice(data);
        })
        .catch((error) => {
          console.error('Error fetching summary data:', error);
        });
    }, []);

    const getProductsFromApi = () => {
      let token = UserService.getToken();
      return fetch('http://localhost:8080/api/basket', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${token}`
        }
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching summary data:', error);
          throw error;
        });
    };

    const deleteProducts = () => {
        let token = UserService.getToken();
        return fetch('http://localhost:8080/api/basket?clear=true', {
            method: 'PUT',
            headers: {
            accept: 'application/json',
            authorization: `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then(navigate('/'))
        .catch((error) => {
          console.error('Error fetching summary data:', error);
          throw error;
        });
    }

    const calculateTotalPrice = (products) => {
        const total = products.reduce((acc, product) => acc + product.cena, 0);
        setTotalPrice(total);
      };

      return (
        <div className='Margin'>
          <table style={{ width: '100%' }}>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    {product.image_base64 && (
                      <img
                        alt={product.nazwa}
                        src={"data:image/png;base64," +product.image_base64}
                        height="128px"
                        style={{ marginRight: '10px' }}
                      />
                    )}
                  </td>
                  <td>{product.cena}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>Total Price: {totalPrice}</div>
          <button className='button-link' onClick={() => deleteProducts()}>
            Pay
          </button>
        </div>
      );
    };

export default Summary;