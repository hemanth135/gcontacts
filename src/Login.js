import React from "react";
import axios from "axios";
import "./login.css";
// import CardList from "./CardList";

class Login extends React.Component {
  handleClick = async (event) => {
    event.preventDefault();
    try {
      await window.gapi.load("client:auth2", async () => {
        await window.gapi.client.init({
          clientId:
            "252669349047-sslescsn58s9ojlifuov3o0303v934qr.apps.googleusercontent.com",
          scope: "https://www.google.com/m8/feeds/",
        });
        this.auth = window.gapi.auth2.getAuthInstance();
        const res = await this.auth.signIn();
        // console.log(res);
        const token = await res.wc.access_token;
        // console.log(token);
        const info = await axios.get(
          "https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=300",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = info.data;
        // console.log(data);
        this.props.onSubmit(true, data, token);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className='position'>
        <button className='login-button' onClick={this.handleClick}>
          <i className='google icon large'></i>
          SignIn with Google
        </button>
      </div>
    );
  }
}

export default Login;
