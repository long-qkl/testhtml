import React, { useState } from 'react'
import { Layout, Menu, Dropdown, message, Avatar } from 'antd'
// import {withRouter} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // DownOutlined,
    UserOutlined,
} from '@ant-design/icons'

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)

    const navigate = useNavigate()
    const changeColeapsed = () => {
        setCollapsed(!collapsed)
    }
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`)
    }
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">
                超级管理员
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" danger onClick={() => {
                localStorage.removeItem('token')
                navigate("/login")
            }}>
                退出
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className='site-layout-background' style={{ padding: '0 16px' }}>
            {
                collapsed ? <MenuUnfoldOutlined onClick={changeColeapsed} /> : <MenuFoldOutlined onClick={changeColeapsed} />
            }
            <div style={{ float: 'right' }} >
                <span style={{ marginRight: '5px' }} >欢迎回来admin</span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
