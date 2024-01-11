import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../UserService';

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
      getCartDataFromApi()
        .then((data) => {
          setCartProducts(data.products);
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }, []);

    const getCartDataFromApi = () => {
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
          console.error('Error fetching cart data:', error);
          throw error;
        });
    };

    const deleteCartProduct = (productId) => {
        fetch(`http://localhost:8080/api/basket/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to delete product from cart');
            }
            return getCartDataFromApi();
          })
          .then((data) => {
            setCartProducts(data.products);
          })
          .catch((error) => {
            console.error('Error deleting product from cart:', error);
          });
      };

      return (
        <div className='Margin'>
          <table style={{ width: '100%' }}>
            <tbody>
              {cartProducts.map((product, index) => (
                <tr key={index}>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    {product.photo && (
                      <img
                        alt={product.name}
                        src={product.photo}
                        height="128px"
                        style={{ marginRight: '10px' }}
                      />
                    )}
                  </td>
                  <td>
                    <Link to={`/details/${index}`}>{product.name}</Link>
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(product.id)}>Remove from Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default Cart;