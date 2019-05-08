import userR from "./userReducer";
import blogR from "./blogReducer";
import commentR from "./commentReducer";
import { combineReducers } from "redux";

const rootR = combineReducers({
  user: userR,
  blogs: blogR,
  comments: commentR
});

export default rootR;
