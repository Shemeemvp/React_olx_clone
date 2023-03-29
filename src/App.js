import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";

/**
 * ?  =====Import Components=====
 */
import react from "react";
import Home from "./Pages/Home";
import Login from "./Components/Login/Login";
import View from "./Pages/ViewPost";
import Create from "./Components/Create/Create";
import { AuthContext, FirebaseContext } from "./Store/Context";
import Post from "./Store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/signup"}>
            <Signup />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/create"}>
            <Create />
          </Route>
          <Route path={"/view"}>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
