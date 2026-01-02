import React, { useMemo, useState } from 'react'

// stale closure casused by useMemo.

const MemoWithRedux = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
    }

    const logCount =() => {
       
            console.log('count in memo', count);
    }

    // const menuItems = useMemo(() => {
    //     return [
    //         {
    //             id: 1,
    //             visible: true, 
    //             onclick: handlePrintPdf,
    //             text: 'sdasd'
    //         },
    //         {
    //             id: 1,
    //             visible: true ,
    //             onclick: handlePrintPdfUser,
    //             text: 'sdasd'
    //         },
    //         {
    //             id: 1,
    //             onclick: upload,
    //             text: 'sdasd'
    //         }
    //     ]
    // }, [handlePrintPdfUser])

  return (
    <div>
        count is {count}

        <button onClick={handleIncrement}>
            Increment
        </button>

        <button onClick={logCount}>
            Log Count
        </button>
    </div>
  )
}

export default MemoWithRedux