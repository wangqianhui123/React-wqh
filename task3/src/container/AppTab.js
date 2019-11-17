import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppInspire from "./AppInspire";
import AppFirst from "./AppFirst";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://img02.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2F124e2183133fe31e&appid=122) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://img02.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2F124e2183133fe31e&appid=122) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppFirst></AppFirst>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://img03.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2Fc9d77b9cd2a6a1d0&appid=122) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://img03.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi01piccdn.sogoucdn.com%2Fc9d77b9cd2a6a1d0&appid=122) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <AppInspire/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}