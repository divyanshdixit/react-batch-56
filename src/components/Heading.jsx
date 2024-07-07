import React from 'react';

export const Heading = ({title, getDataFromChild}) => {
    var x = 10;
  return (
    <>
        <h1> {title}</h1>
        <button type='button' onClick={() => getDataFromChild(x)}> SEND DATA</button>
    </>
  )
}

// export default Heading