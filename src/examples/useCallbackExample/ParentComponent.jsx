import { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>

      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>

      <ChildComponent handleClick={handleClick} />

    </div>
  );
}

export default ParentComponent;