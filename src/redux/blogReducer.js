const initState = {
  blogs: []
};

const ADD_POST = "ADD_POST";

export default function blogReducer(state = initState, action) {
  switch (action.type) {
    case ADD_POST:
      console.log(action.payload, "action test");
      return { ...state, blogs: action.payload };
    default:
      return state;
  }
}

export function setBlog(blogs) {
  return {
    type: ADD_POST,
    payload: blogs
  };
}
