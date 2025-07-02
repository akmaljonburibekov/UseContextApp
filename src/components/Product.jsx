import React from 'react'

function Product({product}) {
  const {id, image, title, price} = product
  console.log(product);
  return (
    <div className='card'>
      <img className='card__image' src={image} alt={product.title} width={50}/>
      <div className="card__info">
          <h5 className='card__title'>{title}</h5>
          <small className='card__price'>Price: ${price}</small>
      </div>
    </div>
  )
}

export default Product