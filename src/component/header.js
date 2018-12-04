import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./header.scss";

export class Header extends Component {
  goLogin = () => {
    console.log(this.props);
    this.props.dispatch({
      type: "CHANGE_HEADER",
      show: false
    });
    this.props.history.push("/login");   
  };

  render() {
    return (
      <div
        className={this.props.class === "noShow" ? "header noShow" : "header"}
      >
        <div className="logo-container">
          <div className="logo" />
        </div>

        <div className="trial account-icon" v-if="!isLogin">
          <div className="circle">
            <span className="icon" />
            <span className="dot" v-if="isDot" />
          </div>
          <span className="text" />
        </div>

        <div className="login account-icon" onClick={this.goLogin}>
          <div className="circle">
            <span className="icon" />
          </div>
          <span className="text" />
        </div>

        <div className="account">{this.props.menuName}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuName: state.menuName,
  alert: state.alert
});
// 先后顺序不影响
//export default connect(mapStateToProps)(withRouter(Header));
export default withRouter(connect(mapStateToProps)(Header));
