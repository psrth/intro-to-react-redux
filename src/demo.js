import {createStore} from 'redux';

// REDUX SETUP

// STORE --> GLOBALISED STATE

// ACTION --> INCREMENT
// a function that returns an object
const increment = () => {
  return{
    type: "INCREMENT"
  }
}

const decrement = () => {
  return{
    type: "DECREMENT"
  }
}


// REDUCER --> MODIFIES STORE BASED ON ACTION
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
}

let store = createStore(counter);

// DISPLAY
store.subscribe(() => console.log(store.getState()))

// DISPATCH --> DISPATCH ACTION TO REDUCER
store.dispatch(increment());
store.dispatch(increment());
