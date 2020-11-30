const allPosts = {
  posts: [
    {
      header: "Blog post 1",
      body: "this is sample body"
    },
    {
      header: "Blog post 1",
      body: "this is sample body"
    },
    {
      header: "Blog post 1",
      body: "this is sample body"
    }
  ]
}

const postReducer = (state = allPosts, action) => {
    switch(action.type){
      case "ADD":
        state.posts.push(action.payload);
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

export default postReducer;