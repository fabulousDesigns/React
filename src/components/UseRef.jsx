import { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;
    // console.log("state:", count);
    console.log("ref:", countRef.current);
  };

  return (
    <div className="useRef">
      Count: {countRef.current}
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}
