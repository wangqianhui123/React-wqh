import React, { Component } from 'react'
import { NavBar, Icon, Tabs, WhiteSpace,Flex} from 'antd-mobile';
import './App.css';

export default class AppInspire extends Component {
    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);

    render(){
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性' },
            { title: '彪悍' },
            { title: '温暖' },
            { title: '冷淡' },
          ];
        return(
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" type='search' style={{ color:'#000', marginRight: '16px'}} />,
                    ]}
                    >灵感
                </NavBar>
                <WhiteSpace />
                   <Tabs id='aa' tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                   <div className="flexs-container">
                   <Flex wrap="wrap">
                       <Flex.Item className="inline">
                           <img src={require('../images/5_03.jpg')}></img>
                       </Flex.Item>
                       <Flex.Item className="inline">
                           <img src={require('../images/6_03.jpg')}></img>
                       </Flex.Item>
                   </Flex>
                   <Flex wrap="wrap">
                       <Flex.Item className="inline">
                           <img src={require('../images/7_03.jpg')}></img>
                       </Flex.Item>
                       <Flex.Item className="inline">
                           <img src={require('../images/8_03.jpg')}></img>
                       </Flex.Item>
                   </Flex>
                   <Flex wrap="wrap">
                       <Flex.Item className="inline">
                           <img src={require('../images/5_03.jpg')}></img>
                       </Flex.Item>
                       <Flex.Item className="inline">
                           <img src={require('../images/6_03.jpg')}></img>
                       </Flex.Item>
                   </Flex>
                   </div>
                   </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}