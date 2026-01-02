import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../redux/Counter/counterSlice';

const CounterComponent = () => {

    const {count, age} = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment()) // 'counter/increment'
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncrementAmount = () => {
      dispatch(incrementByAmount({x:10, y: 20}))
    }

    const handleReset = () => {
      dispatch(reset())
    }

  return (
    <div>
        <p>  Count is {count} </p>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
        <button onClick={handleIncrementAmount}> IncrementByAmount </button>
        <button onClick={handleReset}> Reset </button>
    </div>
  )
}

export default CounterComponent