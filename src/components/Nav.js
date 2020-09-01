import React from "react";
import "../styles/nav.css";

class Nav extends React.Component {
  render() {
    // console.log(this.props.info);
    return (
      <nav className='nav'>
        <div>
          <ul>
            <li className='nav-name'>
              {this.props.info.feed.author[0].name.$t}
            </li>
            <li className='nav-email'>
              {this.props.info.feed.author[0].email.$t}
            </li>
          </ul>
        </div>
        <div onClick={() => this.props.loginStatus(false, null, null)}>
          <i className='sign-out big alternate icon inverted white logout link'></i>
        </div>
      </nav>
    );
  }
}
export default Nav;
