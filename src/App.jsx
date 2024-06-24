import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'
import { UserContext, initialState, reducer } from './components/userContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const { products, basket, total, hide } = state;

  useEffect(() => {
    fetch('http://localhost:3004/products')
    .then(res => res.json())
    .then(res => {
      dispatch({type: 'set_Product', payload: res})
    })
  }, []);

  useEffect(() => {
    dispatch({type: 'set_Total'})
  }, [basket]);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch}}>
        <h2>Total: {total} USD</h2>
        <div className='row'>
            <ProductList
              items={products}
            />
            <Basket
              items={basket}
            />
        </div>        
      </UserContext.Provider>
    </>
  )
}

export default App
