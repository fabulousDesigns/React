import { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  const [count, setCount] = useState(0);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <input
          type="number"
          onChange={onChangeHandler}
          value={number}
          placeholder="Enter a number"
        />
        <p>Squared number is: {squaredNum}</p>
        <br />
        <p>Count value is: {count}</p>
        <button onClick={handleCounter}>Increment</button>
      </div>
    </>
  );
};

function squareNum(num) {
  console.log("Squaring number!");
  return Math.pow(num, 2);
}

export default UseMemo;
