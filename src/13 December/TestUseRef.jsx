import React, { useRef, useState } from 'react'

const TestUseRef = () => {
    //     const [count, setCount] = useState(0);

        const btn = useRef();
        console.log(btn);
    
    // // let val = 0;
    //  const handleClick2 = () =>{
    //     // val = val + 1; 
    //     val.current = val.current + 1;
    //     console.log(`value from local variable: ${val.current}`)
    //     setCount(count + 1);
    // }

    const handleClickButton = () =>{
        btn.current.style.backgroundColor = "red";
        btn.current.innerText = "The content has changed";
    }
  return (
    <div>
        {/* <h1>{count}</h1> */}
       <button  ref={btn}>Click me</button> <br /><br />
       <button  onClick={handleClickButton}>Use me to change the content of above button</button>
    </div>
  )
}

export default TestUseRef
