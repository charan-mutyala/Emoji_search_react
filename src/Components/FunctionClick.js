import React from 'react'

function FunctionClick() {
     function handleClick(){
        console.log("This is fucntion component event");
    }
  return (
    <div>
        <button onClick={handleClick}>Click </button>
    </div>
  )
}

export default FunctionClick