import React, { useEffect, useState } from 'react'

// class component => 3 lifecycle of componetn => 4 func
// functional component => useEffect() => component lifecycle

const EffectUse = ({name, age}) => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);

    const handleClick = () => {
        // setCount(count + 1);
        setCount1(count1 + 1);
    }

    // useEffect(callback fn, depe array[state, props])
    // it. willnot return anything except function (cleanup function ) => component unmount
    // 1case: mounting phase => [] blank
    // usecase: api data fetch , state/prop change koi kaam krna hai = side effect

    useEffect( () => {
        console.log('mounting', count);
    }, [] ) // hook => function

    // 2nd case: // update phase
    useEffect( () => {
        console.log('updating phase', count, count1)
        return () => {
            console.log('first')
        }
    }, [count] ) 

    // 3rd case: unmounting phase
    useEffect( () => {
        // const id = setInterval(() => {
        //     console.log('timeout')
        // }, 1000);
        // console.log(id);
        return () => {
            clearInterval();
            console.log('unmounting')
        }
    }, [] ) 

  return (
    <div>
        <h3> Count from effect use compoent - {count} - {count1}</h3>
        <button onClick={handleClick}> Click </button>
    </div>
  )
}

export default EffectUse