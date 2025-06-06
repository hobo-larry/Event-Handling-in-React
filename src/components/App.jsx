import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    return setHeadingText("submited!");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        className="button"
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
