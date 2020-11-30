const allPosts = {
  num: 3,
  posts: [
    {
      id: 1,
      header: "Blog post 1",
      body: "this is sample body"
    },
    {
      id: 2,
      header: "Blog post 2",
      body: "this is sample body"
    },
    {
      id: 3,
      header: "Blog post 3",
      body: "this is sample body"
    }
  ]
}

const postReducer = (state = allPosts, action) => {
    switch(action.type){
      case "ADD":
        state.posts.push(action.payload);
        return state;
      case "DEL":
        state.posts.pop(action.payload, 1);
        return state;
      case "NESTED":
        state.obj.count += 1;
        return state;
      default:
        return state;
    }
}

export default postReducer;