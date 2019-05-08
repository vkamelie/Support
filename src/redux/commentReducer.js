const initialState = {
  comments: []
};

const ADD_COMMENT = "ADD_COMMENT";
//const UPDATE_COMMENT = "UPDATE_COMMENT";

export default function Commentreducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action.payload, "comment added");
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
}
