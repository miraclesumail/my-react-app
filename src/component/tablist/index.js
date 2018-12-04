import React, { Component } from "react";
import "./index.scss";

export default class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  chooseIndex = index => {
    return () => {
      this.$set("index", index);
    };
  };

  render() {
    const child = this.props.children[this.state.index];
    return (
      <div className="tabList">
        <div className="head">
          {this.props.list.map((item, index) => (
            <div key={index} onClick={this.chooseIndex(index)}>
              {item.name}
            </div>
          ))}
        </div>
        {child}
      </div>
    );
  }
}
