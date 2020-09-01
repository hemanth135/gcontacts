import React from "react";
import Login from "./Login";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardList from "./CardList";
import Nav from "./Nav";

class App extends React.Component {
  state = {
    isLogin: false,
    contacts: null,
    token: null,
  };
  handleLogin = (isLogin, contacts, token) => {
    this.setState({ isLogin: isLogin, contacts: contacts, token: token });
  };
  render() {
    // return <Login onSubmit={this.handleLogin} />;
    return this.state.isLogin ? (
      <div>
        <Nav info={this.state.contacts} loginStatus={this.handleLogin} />
        <CardList info={this.state.contacts} token={this.state.token} />
      </div>
    ) : (
      <Login onSubmit={this.handleLogin} />
    );
  }
}

export default App;
