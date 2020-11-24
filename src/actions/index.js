export const increment = (step) => {
    return{
      type: "NESTED",
      payload: step
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