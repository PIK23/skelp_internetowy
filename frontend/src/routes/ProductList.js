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
                  <img alt={product.name} src={product.photo} height="128px" style={{ marginRight: '10px' }} />
                </td>
                <td>
                  <Link to={`/details/${index}`}>{product.name}</Link>
                </td>
                <td>{product.price}</td>
                <td>
                    <button onClick={() => handleAddToCart(product.name)} className='cart'>
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