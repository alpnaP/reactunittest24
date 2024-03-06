import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 data-testid="cnt">{counter}</h3>

      <button data-testid="btn" onClick={() => setCounter(counter + 1)}>
        Increament
      </button>
    </div>
  );
};
