import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import PageRender from "./PageRender";

import { Alert } from "./components/alert/Alert";

import { refreshToken } from "./redux/actions/authAction";
import { getCategories } from "./redux/actions/categoryAction";
import { getHomeBlogs } from "./redux/actions/blogAction";

import SocketClient from "./SocketClient";
import Header from "./components/global/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeBlogs());
    dispatch(getCategories());
    dispatch(refreshToken());
  }, [dispatch]);

  // useEffect(() => {
  //   const socket = io();
  //   dispatch({ type: "SOCKET", payload: socket });
  //   return () => {
  //     socket.close();
  //   };
  // }, [dispatch]);

  return (
    <>
      <SocketClient />
      <Router>
        <Header />
        <Alert />

        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
