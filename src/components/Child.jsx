import React, { useState } from 'react'

const Child = ({fname, datafn}) => {
    const [data, setData] = useState('dixit')
  return (
    <div>
        Child - {fname}
        {/* <button type='button' onClick={}> send </button> */}
        <button type='button' onClick={() => datafn(data)}> send </button>
    </div>
  )
}

export default Child