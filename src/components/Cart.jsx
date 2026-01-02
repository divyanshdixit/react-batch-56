import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeItems, clear } from '../redux/Cart/cartSlice';

const Cart = () => {
    const {items} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    console.log(items);

    const handleAdd = () => {
        const item = {
            id: 2,
            name: 'Books'
        }
        dispatch(addItems(item))
    }

    const handleDelete = (id) => {
        dispatch(removeItems(id))
    }
    
    const handleReset = () => {
        dispatch(clear())
    }

  return (
    <div>
        <p> Cart items count - {items.length}</p>
        {items.map(item => (
            <div key={item.id}>
                <p> 
                    {item.name}
                    <button onClick={() => handleDelete(item.id)}> Delete Cart Item </button>
                </p>
            </div>
        ))}
        <button onClick={handleAdd}> Add to Cart </button>
        <button onClick={handleReset}> Clear Cart </button>
    </div>
  )
}

export default Cart