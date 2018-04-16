import React from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import AutoPlay from "../AutoPlay";

import "./tabs.css";

class Demo extends React.Component {
  renderContent = tab => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "42%",
        backgroundColor: "#fff"
      }}
    >
      <AutoPlay />
    </div>
  );

  render() {
    const tabs = [
      { title: "1st Tab" },
      { title: "2nd Tab" },
      { title: "3rd Tab" },
      { title: "4th Tab" },
      { title: "5th Tab" },
      { title: "6th Tab" },
      { title: "7th Tab" },
      { title: "8th Tab" },
      { title: "9th Tab" }
    ];

    return (
      <div style={{ height: "50%" }}>
        <WhiteSpace />
        <Tabs
          swipeable={false}
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
        >
          {this.renderContent}
        </Tabs>
        <div className="lists">
          <div className="item">
            <p className="title">标题</p>
            <p className="content">这里是内容</p>
          </div>
          <div className="item">
            <p className="title">标题</p>
            <p className="content">这里是内容</p>
          </div>
          <div className="item">
            <p className="title">标题</p>
            <p className="content">这里是内容</p>
          </div>
        </div>
        <WhiteSpace />
      </div>
    );
  }
}

export default Demo;
