import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './profile.scss'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  goDeposit = () => {
    this.props.toggleProfile();
    this.props.history.push("/deposit");
  }
    
  render() {
    const className = this.props.showProfile ? 'profile showss' : 'profile'
    return (
       <div className={className}>
            <ul>
                <li onClick={this.goDeposit}>存款</li>
                <li>bbbb</li>
                <li>cccc</li>
            </ul>
       </div>    
    );
  }
}

const mapStateToProps = state => ({
     showProfile: state.showProfile
});

const mapDispatchToProps = dispatch => ({
  toggleProfile: () => {
      dispatch({
        type: 'CHANGE_PROFILE'
      })
  }
}); 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));