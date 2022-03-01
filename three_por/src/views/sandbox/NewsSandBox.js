import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import { Layout } from 'antd'

//css
import './NewsSandBox.min.css'

const { Content } = Layout

export default function NewsSandBox() {
    return (
        <Layout>
            {/* 侧边栏(左) */}
            <SideMenu></SideMenu>

            <Layout className='site-layout'>
                {/* 内容头部 */}
                <TopHeader></TopHeader>
                <Content className='site-layout-background' style={{
                    margin: '24px 16px',
                    padding: '24px',
                    minHeight: '280px',
                    overflow: 'auto'
                }} >
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/user-manage/list" element={<UserList />}></Route>
                        <Route path="/right-manage/role/list" element={<RoleList />}></Route>
                        <Route path="/right-manage/right/list" element={<RightList />}></Route>

                        {/* <Navigate from="/" to="/home" /> */}
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<NoPermission />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
