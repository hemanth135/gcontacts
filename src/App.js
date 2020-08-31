import React from "react";
import Login from "./Login";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    isLogin: false,
    contacts: null,
    token: null,
  };
  handleLogin = (isLogin, contacts, token) => {
    this.setState({ isLogin: true, contacts: contacts, token: token });
  };
  render() {
    // return <Login onSubmit={this.handleLogin} />;
    return this.state.isLogin ? (
      <CardList info={this.state.contacts} token={this.state.token} />
    ) : (
      <Login onSubmit={this.handleLogin} />
    );
  }
}

export default App;
