import React, { Component } from "react";
import { Carousel } from "antd-mobile";

class AutoPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176,
      slideIndex: 0
    };
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }
  render() {
    return (
      <div className="autoPlay">
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={0}
          // beforeChange={(from, to) =>
          //   console.log(`slide from ${from} to ${to}`)
          // }
          // afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={`https://f11.baidu.com/it/u=443169226,3411589660&fm=76`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default AutoPlay;
