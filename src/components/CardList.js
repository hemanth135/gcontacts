import React from "react";
import Card from "./Card";
import axios from "axios";
import "../styles/cardlist.css";

class CardList extends React.Component {
  state = {
    contactInfo: this.props.info.feed.entry,
  };
  token = this.props.token;
  onDeleteContact = async (key) => {
    try {
      let storeKey = key;
      key = key.slice(0, 4) + "s" + key.slice(4);
      // console.log(key);
      await axios.delete(key + "?alt=json", {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "If-Match": "*",
          "Gdata-version": "3.0",
        },
      });

      let newInfo = this.state.contactInfo.filter(
        (member) => member.id.$t !== storeKey
      );
      this.setState({ contactInfo: newInfo });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    let res = this.state.contactInfo.map((member) => {
      return (
        <Card
          key={member.id.$t}
          id={member.id.$t}
          name={member.title.$t}
          email={member.gd$email ? member.gd$email[0].address : "NA"}
          number={member.gd$phoneNumber ? member.gd$phoneNumber[0].$t : "NA"}
          onClickDelete={this.onDeleteContact}
        />
      );
    });
    return (
      <div className='top'>
        <div className='contact-word'>
          Contacts ({this.state.contactInfo.length})
        </div>
        <div className='column-name'>
          <span className='column-name-list '>NAME</span>
          <span className='column-name-list '>EMAIL</span>
          <span className='column-name-list '>PHONE NUMBER</span>
        </div>
        <div className='fixedHeightContainer'>{res}</div>
      </div>
    );
  }
}

export default CardList;
