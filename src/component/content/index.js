import React, { Component } from 'react';
import { connect } from "react-redux";
import './content.scss'

class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {
         list:[
             {
                 title:'qqqqqq',
                 details:[
                     'aaaaaa',
                     'bbbbbb',
                     'cccccc'
                 ]
             },
             {
                title:'wwwww',
                details:[
                    'aaaaaa',
                    'bbbbbb',
                    'cccccc'
                ]
             },
             {
                title:'eeeee',
                details:[
                    'aaaaaa',
                    'bbbbbb',
                    'cccccc'
                ]
              },
              {
                title:'fffff',
                details:[
                    'aaaaaa',
                    'bbbbbb',
                    'cccccc'
                ]
              }
         ]
      }
  }

  render() {
    const {index} = this.props, title = this.state.list[index].title;
    console.log(index);
    const content = (<div className="title">{title}</div>)
    return (
        <div className="content">
            <div className="toggle" onClick={this.props.toggleProfile}>toggle</div>
            {content}
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    toggleProfile: () => {
        dispatch({
          type: 'CHANGE_PROFILE'
        })
    }
}); 

const mapStateToProps = state => ({
    showProfile: state.showProfile
}); 

export default connect(mapStateToProps,mapDispatchToProps)(Content);
 