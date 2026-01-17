import React, { useState } from "react";

const Appbar = () => {
  // const [state, setState ] = useState(null); // undefined , {}, [], () => {}

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // state vs props =>
  // what are the hooks in react? why we use it ?
  // ES 6 => arrow function, var vs let vs const,

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleSidebar = () => {
    setShow(!show); // !false => !true => false
  };

  //  ? :
  return (
    <div>
      <p> Count - {count} </p>

      {show ? (
        <div>
          <p> Appbar is showing </p>
        </div>
      ) : null}

      <button onClick={handleClick}> Increment </button>
      <button onClick={toggleSidebar}> Toggle sidebar </button>
    </div>
  );
};

export default Appbar;
