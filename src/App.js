import React from "react";

// that is a component
function App() {
  const sayHello = () => {
    console.log("hello Dominik");
  };

  return (
    // this is not real HTML, it is Javascript (jsx)
    // React compiles this JS to real HTML => (React.createElement(div))
    <div>
      <h1>Hello World!</h1>
      {/* onClick='temp' equals HTML, onClick={temp} equals Javascript */}
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}

export default App;
