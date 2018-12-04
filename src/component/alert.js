import React, { Component } from "react";
import { connect } from "react-redux";
import "./alert.css";

class Alert extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.show ? "alert show" : "alert hidden"}>
        wwww
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.alert.status ? true : false
});
export default connect(mapStateToProps)(Alert);
