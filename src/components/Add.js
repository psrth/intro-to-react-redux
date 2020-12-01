import React, { useState, setState } from 'react';
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
    
    const [headerText, setHeader] = useState("Header Text");
    const [bodyText, setBody] = useState("Add your body text here!");

    function submitPost() {
      dispatch(add(headerText, bodyText));
    }
    return(
      <div>
        <form>
          <label>
            Header 1:
            <input type="text" placeholder={headerText} onChange={e => setHeader(e.target.value)}/>
          </label><br></br>
          <label>
            Body:
            <input type="text" placeholder={bodyText} onChange={e => setBody(e.target.value)}/>
          </label><br></br>
        </form><br></br><br></br>
        <button onClick={ submitPost }>Add Post</button><br></br>
      </div>
    )
}

export default Add;
