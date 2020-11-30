export const add = (header1, body1) => {
    return{
      type: "ADD",
      payload: {
        header: header1,
        body: body1
      }
    }
  }

  export const del = (index1) => {
    return{
      type: "DEL",
      payload: {
        index: index1
      }
    }
  }

  
export const decrement = () => {
    return{
      type: "DECREMENT"
    }
  }

export const signIn = () => {
    return {
        type: "SIGNIN"
    }
}