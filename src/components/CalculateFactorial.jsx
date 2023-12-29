import React, { useMemo, useState } from "react";

const CalculateFactorial = () => {
  const [number, setNumber] = useState(0);
  const factorial = useMemo(() => factorialOF(number), [number]);
  const [inc, setInc] = useState(0);
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const handleCounter = () => {
    setInc(inc + 1);
  };

  return (
    <React.Fragment>
      <div>
        <input
          type="number"
          onChange={onChangeHandler}
          value={number}
          placeholder="Enter a number"
        />
        <p>Factorial is: {factorial}</p>
        <br />
        <p>Count value is: {inc}</p>
        <button onClick={handleCounter}>Increment</button>
      </div>
    </React.Fragment>
  );
};

function factorialOF(num) {
  console.log("Calculating factorial!");
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

export default CalculateFactorial;
