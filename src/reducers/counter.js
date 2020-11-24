const initialState = {
  count: 0,
  obj: {
    count: 0
  }
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
      case "INCREMENT":
        state.count += action.payload;
        return state;
      case "DECREMENT":
        state.count -= 1;
        return state;
      case "NESTED":
        state.obj.count += 1;
        return state;
      default:
        return state;
    }
}

export default counterReducer;