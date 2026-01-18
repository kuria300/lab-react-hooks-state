import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({cart, setCart, filtered}) => {
   // console.log(filtered)
  
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filtered.length >0 ?(
        filtered.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} filtered={filtered}/>
      ))
      ):(
        <p>no products available</p>
      )}
    </div>
  )
}

export default ProductList
