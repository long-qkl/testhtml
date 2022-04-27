import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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
    //进入主页后，判断是否拥有token验证
    if(!localStorage.getItem('token')){
        return <Navigate to="/login" />
    }

    return (
        <Layout>
            {/* 侧边栏(左) */}
            <SideMenu/>

            <Layout className='site-layout'>
                {/* 内容头部 */}
                <TopHeader></TopHeader>
                
                {/* 界面内容部分 */}
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: '24px',
                        minHeight: '280px',
                        overflow: 'auto'
                    }}
                >
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/user-manage/list" element={<UserList />} />
                        <Route path="/right-manage/role/list" element={<RoleList />} />
                        <Route path="/right-manage/right/list" element={<RightList />} />

                        {/* <Navigate from="/" to="/home" /> */}
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<NoPermission />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
