import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions/index";

function App() {
  const  counter = useSelector( state => state.counter );
  const isLogged = useSelector( state => state.isLogged );
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter - {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged ? <h1>That's my valuable info...</h1> : <h2>not Logged in</h2>}
    </div>
  );
}

export default App;
