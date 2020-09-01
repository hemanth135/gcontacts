import React from "react";
import "../styles/Card.css";
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
      <div className='card-layout' onClick={this.handleClick}>
        <span className='card1'>
          {" "}
          <img className='profile'></img> {this.props.name}
        </span>
        <span className='card2'>{this.props.email}</span>
        <span className='card3'>{this.props.number}</span>
        <span>
          <i
            onClick={(event) => this.props.onClickDelete(this.id)}
            style={{ display: this.state.display }}
            className=' trash alternate outline icon'
          ></i>
        </span>
      </div>
    );
  }
}

export default Card;
