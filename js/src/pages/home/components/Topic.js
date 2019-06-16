import React, { Component } from "react";
import { connect } from "react-redux";
import topic from "../style/topic.module.css";

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className={topic.topicWrapper}>
        {list.map(item => {
          return (
            <div key={item.get("id")} className={topic.topicItem}>
              <img className={topic.topicImg} src={item.get("imgUrl")} alt="" />
              {item.get("title")}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapState = state => ({
  list: state.get("home").get("topicList")
});
export default connect(
  mapState,
  null
)(Topic);
