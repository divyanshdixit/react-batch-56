import React from "react";

const BasicComp = ({name, age= 28}) => {
    var t = 10;
  return (
    <div>
      <h1> Welcome {name} - {age} </h1>
    </div>
  );
};

export default BasicComp;
// named export :
// export {BasicComp};


// js => object destructring 
