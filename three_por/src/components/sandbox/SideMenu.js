import React from 'react'
import { Layout,Menu } from 'antd';
import './SideMenu.min.css'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;

export default function SideMenu() {
    return (
      // collapsed={this.state.collapsed}
        <Sider trigger={null} collapsible>
          <div className="logo">新闻发布管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
    )
}
