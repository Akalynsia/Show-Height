import { useState, useEffect, useRef } from "react";

export default function () {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <div ref={ref}>
      <h2>Hello world</h2>
      <h2>Hello world</h2>
      Height: {height}px
    </div>
  );
}
