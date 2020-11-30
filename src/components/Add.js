import React, { useState } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../actions/index';

const post = {
  head1: "",
  body: ""
}

function Add() {
    const allPosts = useSelector(state => state.post.posts)
    // const nestedCount = useSelector(state => state.counter.obj.count)
    const dispatch = useDispatch();
    
    const [headerText, setHeader] = useState("hello");
    const [bodyText, setBody] = useState("parth");

    
    return(
      <div>
        {/* <form>
          <label>
            Header 1:
            <input type="text" name="header" onChange={() => setHeader={header}}/>
          </label>
          <label>
            Body:
            <input type="text" onChange={() => setBody={value}}/>
          </label>
        </form> */}
        <button onClick={() => dispatch(add(headerText, bodyText))}>Add Post</button>
      </div>
    )
}

export default Add;
