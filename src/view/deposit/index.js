import React, { Component } from 'react'
import TabList from '../../component/tablist'
import Online from './children/online'
import AliWechat from './children/aliwechat'
import Withdraw from './children/withdraw'

export default class Deposit extends Component {
  constructor() {
        super(); 
        this.state= {
            depositList: [
                {
                    id: 0,
                    name: '在线充值'
                },
                {
                    id: 1,
                    name: '微信支付宝'
                },
                {
                    id: 2,
                    name: '提款'
                }
            ]
        }
  }  
  
  getOnline = () => {
      console.log('getOnline')
  }

  getWechat = () => {
    console.log('getWechat')
  }

  withDraw = () => {
    console.log('withDraw')
  }
  
  render() {
    return (
      <TabList list={this.state.depositList} >
         <Online/>
         <AliWechat/>
         <Withdraw/>
      </TabList>
    )
  }
}
