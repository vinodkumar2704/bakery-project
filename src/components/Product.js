import React from 'react';

export default function Product(props) {
  const { product, onAdd, onDelete } = props;
  return (
    <div className='card'>
      <img className="small" src={require(`../images/${product.image}`)}  alt={product.name} />
      <div className='card-details'>
      <h3>{product.name}</h3>
      <div>Rs.{product.price}</div></div>
      <div className='card--btn'>
        <button  onClick={() => onAdd(product)}>Add To Cart</button>
      
        <button onClick={() => onDelete(product)}>Delete from Cart</button>
      </div>
    </div>
  );
}
