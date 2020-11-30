const loggedStatus = {
  status: false
}

const isLoggedReducer = (state = loggedStatus, action) => {
    switch(action.type){
      case "SIGNIN":
        loggedStatus.status = !loggedStatus.status;
        return loggedStatus.status;
      default:
        return loggedStatus.status;
    }
}

export default isLoggedReducer;