import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Intro to Redux in React</h1><br></br>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(2))}>+2</button>
      { isLogged ? <h2>Currently logged in.</h2> : <h2>Currently logged out.</h2>}
      <button onClick={() => dispatch(signIn())}>Sign In/Sign Out</button>
    </div>
  );
}

export default App;
