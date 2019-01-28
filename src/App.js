import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import LogIn from "./components/logIn/logIn";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LogIn />
        </div>
      </Provider>
    );
  }
}

export default App;
