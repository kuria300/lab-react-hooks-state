import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'


const App = () => {
  // TODO: Implement state for dark mode toggle
  const [mode ,setMode]= useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart]= useState([])

  // TODO: Implement state for category filtering
 const [category, setCategory]= useState('all')

 const filtered= sampleProducts.filter((obj)=>{
      if(category === 'all'){
        return true
      }else{
        return obj.category === category
      }

 })

 function filterCategory(e){
   setCategory(e.target.value)
   //console.log(e.target.value)
 }
//  useEffect(()=>{
//   console.log(filtered)
//   console.log(category)
//  }, [category])
  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
       <DarkModeToggle mode={mode} setMode={setMode} />
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={filterCategory} value={category}>
        <option value="all" >All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList cart={cart} setCart={setCart} filtered={filtered}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
