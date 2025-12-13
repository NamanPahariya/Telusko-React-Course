import React, { useState } from "react";

const TestState = () => {
  // small correction during session, we should not call the object name directly inside the useState function, because we are already defined it in the variable name.
  const [person, setPerson] = useState({ name: "naman", age: 23 });
  const [count, setCount] = useState(0);
  const handleObject = () => {
    {
      /*
    // This is wrong, React does not detect changes if you mutate state directly.
    person.name = "Rohan"
    setPerson(person)
     */
    }

    //This is correct, Always create a new object:
    const updatePerson = { ...person, name: "Rohan" };
    setPerson(updatePerson);
  };

  const handleValueByOne = () => {
    setCount(count + 1); // will update the value by one each time you click on button.
  };

  const handleValueByThree = () => {
    // this will update the value by three for the first render, second render and so on.
    setCount((count) => count + 1); // 1
    setCount((count) => count + 1); // 2
    setCount((count) => count + 1); // 3 (all setter function is completed, the 1st render will excute and print 3 as a final value on the UI)
  };
  return (
    <div>
      <p>
        {person.name} — {person.age}
      </p>
      <button onClick={handleObject}>Click me!</button>
      <p>{count}</p>
      <button onClick={handleValueByOne}>+1</button>
      <button onClick={handleValueByThree}>+3</button>
    </div>
  );
};

export default TestState;
