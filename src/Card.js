import React from "react";
import "./Card.css";
class Card extends React.Component {
  id = this.props.id;
  state = { display: "none" };
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      display: this.state.display === "none" ? "inline" : "none",
    });
  };

  render() {
    return (
      <div className='card' onClick={this.handleClick}>
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <div>{this.props.number}</div>
        <div
          onClick={(event) => this.props.onClickDelete(this.id)}
          style={{ display: this.state.display }}
        >
          <a>
            <i className=' trash alternate outline icon'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
