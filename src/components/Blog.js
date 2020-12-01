import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { del } from '../actions/index';

function Home() {
    const allPosts = useSelector(state => state.post.posts)
    const dispatch = useDispatch();
    
    return(
      <div>
        <button onClick={() => console.log(allPosts)}>Console</button>
        <ul>
          {allPosts.map((value, index) => {
            return <li key={index}>
              {value.header}
              <br></br>
              {value.body}
              <br></br>
              
              <button>Edit</button>
              <button onClick={() => dispatch(del(value.id))}>Delete</button>
              <br></br><br></br>
              </li>
          })}
        </ul>
      </div>
    )
}

export default Home;
