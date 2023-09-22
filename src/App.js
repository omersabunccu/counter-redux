import React from "react";
import store from "./store";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const [flag, setFlag] = React.useState(false);
  const handleIncrement = () => {
    store.dispatch({
      type:"increment"
    })
  };
  

  const reset = () => {
    store.dispatch({
      type: "reset",
    });
    setFlag(!flag);
  };

  const decrement = () => {
    store.dispatch({
      type: "decr",
    });
    setFlag(!flag);
  };

  return (
    <div className="App">
      <h1>{store.getState()}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
