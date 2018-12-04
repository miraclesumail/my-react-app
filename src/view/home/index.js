import React, { Component } from 'react';
import { login, getConfig, getPlatformAnnouncements } from '../../tool/api'
import { Carousel } from 'antd';
import { connect } from "react-redux";
import Notice from '../../component/notice'
import Nav from '../../component/nav'
import Content from '../../component/content'
import { toggleAlert } from '../../redux/action'
import { promise } from '../../tool'
import { showAlert } from '../../tool'
import './home.scss'

class Home extends Component {
    constructor() {
        super();
        console.log(this.$react);
        this.$react.subscribe('eject', () => {
             console.log('eject');
        })
        this.state = {
            name: 'wwwww',
            banners:[],
            notice:[],
            chooseIndex:0
        }

    login(
            'player',
            {
                name: 'atest111',
                password: 556677,
                captcha: 9546,
                _isLoading: false,
                _isModal: true,
                clientDomain: window.location.hostname,      
            }
        )
    }  
    
    componentWillMount() {
        getConfig('platform',  {
            device: 3
        }).then((res) => {
            console.log(res);
            const banners = res.data.activityList.filter((val, index) => {
                return /mobile\/banner/.test(val.code) && val.status === 1
            }).slice(5);
            this.setState((prevState, props) => {
                return {banners};
            })
        })

        let promise1 = getPlatformAnnouncements('platform',
            {
                reach: 'players'
            }
        ), promise2 = getPlatformAnnouncements('platform',
            {
                reach: 'all'
            }
        );
        Promise.all([promise1, promise2]).then((res) => {
             console.log(res)
             let notice = [];
             res.forEach(item => {
                 notice = [...notice, ...item.data]
             })
             console.log(notice);
             this.setState((prevState, props) => {
                 return {
                     notice
                 }
             })
        })
    }

    changeIndex = (chooseIndex) => {
        return () => {
            console.log(chooseIndex);
            this.$react.publish('eject');
            this.setState((prevState, props) => {
                return {chooseIndex}
            })
        }
    }

    // 一个轮回
    toggleAlert = () => {
        if(!this.props.alert.canChange) return;
        showAlert({
            text: '这是alert',
            category: 'tishi',
            status: 1
        })
    }

    onChange = (a,b,c) => {
        // console.log('change')
        // console.log(a,b,c)
        // console.log(this.state)
    }

    componentWillUnmount(){
        console.log(document.body.scrollTop)
    }

  render() {
    return (
      <div className="home">
        <div className="main">
            <Carousel afterChange={this.onChange} autoplay>
                {
                    this.state.banners.map((item, index) => (
                        <div key={index}>
                            <img src={item.bannerImg} alt=""></img>
                        </div>  
                    ))
                }
            </Carousel>
        </div> 
        <Notice list={this.state.notice}/>   
        <Nav change={this.changeIndex}/>  
        <Content index={this.state.chooseIndex}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    menuName: state.menuName,
    alert: state.alert
});
export default connect(mapStateToProps)(Home);