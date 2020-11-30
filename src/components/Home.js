import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, decrement, signIn } from '../actions/index';

function Home() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();
    
    return(
      <div>
        { isLogged ? <h4>Currently logged in.</h4> : <h4>Currently logged out.</h4>}
        <button onClick={() => dispatch(signIn())}>Sign In/Sign Out</button>
      </div>
    )
}

export default Home;
