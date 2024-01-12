import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div>Can't find the product: {id}.</div>;
  }

  return (
    <div className='Margin'>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price} zł</p>
      <p>Weight: {product.weight}</p>
      <p>Dimensions: {product.dimensions}</p>
      {product.photo && (<img alt={product.name} src={'data:image/png;base64,' + product.photo} height="128px" style={{ marginRight: '10px' }}/>
      )}
    </div>
  );
};

export default ProductDetail;


// ulozyc to sensowniej