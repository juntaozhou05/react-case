import React, { Component } from "react";
import home from "./index.module.css";
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Writer from "./components/Writer";

export default class Home extends Component {
  render() {
    return (
      <div className={home.homeWrapper}>
        <div className={home.homeLeft}>
          <img
            className={home.bannerImg}
            src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </div>
        <div className={home.homeRight}>
          <Recommend />
          <Writer />
        </div>
      </div>
    );
  }
}
