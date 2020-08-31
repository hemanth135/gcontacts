import React from "react";
import Card from "./Card";
import axios from "axios";

class CardList extends React.Component {
  state = {
    contactInfo: this.props.info.feed.entry,
  };
  token = this.props.token;
  onDeleteContact = async (key) => {
    try {
      key = key.slice(0, 4) + "s" + key.slice(4);
      console.log(key);
      let info = await axios.delete(key + "?alt=json", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      const data = info.data;
      console.log(data);

      let newInfo = this.state.contactInfo.filter(
        (member) => member.id.$t !== data.entry.id.$t
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
          email={member.email || null}
          number={member.gd$phoneNumber ? member.gd$phoneNumber[0].$t : null}
          onClickDelete={this.onDeleteContact}
        />
      );
    });
    return res;
  }
}

export default CardList;
