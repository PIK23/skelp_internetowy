import React from 'react';
import { Link } from 'react-router-dom';
import cart from './../cart.png'


const ProductList = ({ products }) => {
    const handleAddToCart = (productName) => {
        console.log(`Product added to cart: ${productName}`);
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
                <td>
                  <Link to={`/details/${index}`}>{product.nazwa}</Link>
                </td>
                <td>{product.cena}</td>
                <td>
                    <button onClick={() => handleAddToCart(product.nazwa)} className='cart'>
                    <img alt="Add to cart" src={cart} height="64px" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default ProductList;