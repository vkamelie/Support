import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Blog from "./Components/Blog/Blog";
import Chat from "./Components/ChatRoom/Chat";

import Login from "./Components/Login/Login";
import Res from "./Components/Resources/Res";
import Register from "./Components/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";
import Dash from "./Components/Dashboard /Dash";
import RoomChat from "./Components/ChatRoom/RoomChat/RoomChat";

import About from "./Components/Dashboard /About/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dash} />
        <Route path="/forum" component={Blog} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/resources" component={Res} />
        <Route path="/roomchat" component={RoomChat} />

        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
