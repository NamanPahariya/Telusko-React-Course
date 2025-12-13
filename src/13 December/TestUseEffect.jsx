import React, { useEffect, useState } from 'react'

const TestUseEffect = () => {
    const [count, setCount] = useState(0);
    // const [counter, setCounter] = useState(0);

    // console.log("I will render everytime");

    // useEffect(()=>{
    //     console.log("I will render inside useEffect");
    // })

    // useEffect(()=>{
    //     console.log("I will render only once when component mounts");
    // },[]);


    // useEffect(()=>{
    //     console.log("I will render only when component mount and count state/value change");
    // },[count]); // we can pass more than one dependency value like this: [count, counter].

    // const handleClick = () =>{
    //     setCount(count+1);
    // }
    // const handleClick2 = () =>{
    //     setCounter(count+1);
    // }

    // const handleButton = () =>{
    //     setCount(count+1);
    // }

    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`
    // })

    setInterval(()=>{
        setCount(count+1);
    },1000)

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Click me!</button> <br /><br />
      <h1>{counter}</h1>
      <button onClick={handleClick2}>Click me 2!</button> */}

      {/* <button onClick={handleButton} >click me!</button> */}

       <h1>{count}</h1>

    </>
  )
}

export default TestUseEffect
