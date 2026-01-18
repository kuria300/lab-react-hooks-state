import React, { useEffect } from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, cart, setCart}) => {
  const addToCart=()=>{
     setCart((prevItems)=>{
       
      // const existingItem= prevItems.find((item)=> product.id === item.id)

      // if(existingItem){
      //   const newPrevitems= prevItems.map((item)=>(
      //     item.id === product.id ? {...item, quantity:item.quantity +1} : item
      //   ))

      //   return newPrevitems
      // }

      
      // return [...prevItems, {...product, quantity:1}]

      return [...prevItems, product]
      
     })
  
  }
  //  useEffect(()=>{
  //     console.log(cart)
  //    }, [cart])

  return (
    <>
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button data-testid={'product-' + product.id} onClick={()=>addToCart()}>Add to Cart</button>
    </div>
    </>
  )
}

export default ProductCard
