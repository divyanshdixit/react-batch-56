import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name, setName] = useState('divyansh');
    
    const getData = (d) => {
        console.log('first', d)
    }

  return (
    <div>
        <h1> parent </h1>
        <Child fname={name} datafn={getData}/>
    </div>

  )
}

export default Parent