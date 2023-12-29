import { useRef } from "react";

export default function UseR() {
  const ref = useRef(null);
  const onButtonClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <input type="text" ref={ref} />
      <button type="button" onClick={onButtonClick}>
        Focus the Input
      </button>
    </>
  );
}
