import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, decrement, signIn } from '../actions/index';

function Home() {
    const allPosts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    
    return(
      <div>
        <button onClick={() => console.log(allPosts)}>Console</button>
      </div>
    )
}

export default Home;
