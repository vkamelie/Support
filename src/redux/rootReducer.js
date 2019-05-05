import userR from "./userReducer";
import blogR from "./blogReducer";
import { combineReducers } from "redux";

const rootR = combineReducers({
  user: userR,
  blog: blogR
});

export default rootR;
