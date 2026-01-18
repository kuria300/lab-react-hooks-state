import React, { useEffect } from 'react'

const Cart = ({cart, setCart}) => {
  // useEffect(()=>{
  //   console.log(cart)

  // }, [cart])
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ?(
        <p>Cart is empty</p>
      ):(
        <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map((item, i)=>(
          <li key={i}>{item.name} is in your cart</li>
        ))}
      </ul>
      )
       
      }
    </div>
  )
}

export default Cart
