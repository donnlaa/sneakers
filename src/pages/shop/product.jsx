import React from 'react'

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  return (
    <div className='product'> <img src={productImage}/>{productName}</div>
  )
}
