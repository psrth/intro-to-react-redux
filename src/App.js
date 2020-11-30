import React, { useContext, createContext, useState } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, decrement, signIn } from './actions/index';
import Home from './components/Home';
import Add from './components/Add';
import Blog from './components/Blog';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      

      <Router>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <h1 style={{fontSize: '26px', paddingRight: '500px'}}>Blog Post App — @psrth</h1><br></br>
        <Link to="/">
          <h3 style={{paddingRight: '20px'}}>Home</h3>
        </Link>
        <Link to="/add">
          <h3 style={{paddingRight: '20px'}}>Add</h3>
        </Link>
        <Link to="/blog">
          <h3 style={{paddingRight: '20px'}}>Blog</h3>
        </Link>
        </div>


        <Switch>
            <PrivateRoute path="/add">
              <Add />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>      
    </div>
  );
}

function PrivateRoute({ children }) {

  const isLogged = useSelector(state => state.isLogged)

  return (
    <Route
      render={() =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

export default App;
