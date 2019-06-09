import React, { Component } from "react";
import header from "./header.module.css";
import logoImg from "../../static/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className={header.headerWrapper}>
        <img className={header.img} src={logoImg} alt="" />
      </div>
    );
  }
}
