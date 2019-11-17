import React, { Component } from 'react'
import { NavBar, Icon, Tabs,WingBlank,SearchBar,WhiteSpace ,Carousel,Grid,Flex} from 'antd-mobile';
import './App.css';

const arr=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];

const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: require('../images/2_07.jpg'),
    text: arr[i],
  }));

  const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );
  
  const GridExample = () => (
    <div>
    <Grid data={data} activeStyle={false} columnNum={5} className="not-square-grid" style={{ width: '50px', height: '40px' }}/>
    </div>
  );

  const FlexExample = () => (
    <div className="flex-container">
    <Flex wrap="wrap">
    <Flex.Item className="inline">
      <img src={require('../images/3_03.jpg')}></img>
      <p>Too Art Studio 欧式风格精细</p>
      <p>￥39.95</p>
    </Flex.Item>
    <Flex.Item className="inline">
      <img src={require('../images/4_03.jpg')}></img>
      <p>顺顺工艺欧式风格塑料外框黑</p>
      <p>￥83.99</p>
    </Flex.Item>
  </Flex>
  </div>
  );


export default class AppHome extends Component {
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI',''],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={[
                        <Icon key="0" style={{ color:'#000', marginRight: '16px'}} />,
                    ]}
                    >商城
                </NavBar>
                <SearchBar placeholder="请输入关键字搜索" maxLength={6} />
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
                src={require('../images/1.jpg')}
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
        { <GridExample />}  
        {<FlexExample />} 
        {<FlexExample />} 
     </div>
        )
    }
}