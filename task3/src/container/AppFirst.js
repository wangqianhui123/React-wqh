import React, { Component } from 'react'
import { NavBar, Icon, Tabs, WhiteSpace,Flex,Carousel} from 'antd-mobile';
import './App.css';

export default class AppFirst extends Component{
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
      }
    render(){
        return(
            <div>
               <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0"  style={{ color:'#000', marginRight: '16px'}} />,
                    ]}
                    >住吧家具
                </NavBar>
                <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                src={require('../images/10_02.jpg')}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="flex2-container">
         <Flex wrap="wrap">
          <Flex.Item className="inline">
              <img src={require('../images/11_03.jpg')}></img>
         </Flex.Item>
         <Flex.Item className="inline">
              <img src={require('../images/12_03.jpg')}></img>
         </Flex.Item>
         <Flex.Item className="inline">
              <img src={require('../images/13_03.jpg')}></img>
         </Flex.Item>
        </Flex>
        </div>
        <div className='hot'>
            <img src={require('../images/14_06.jpg')}></img>
            <h2>热门推荐</h2>
            <img className="bb" src={require('../images/15_06.jpg')}></img>
            <WhiteSpace/>
            <img className="bb" src={require('../images/15_06.jpg')}></img>
        </div>
        </div>
        )
    }
}