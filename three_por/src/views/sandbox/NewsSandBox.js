import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'

export default function NewsSandBox() {
    return (
        <div>
            {/* 侧边栏 */}
            <SideMenu></SideMenu>
            {/* 内容头部 */}
            <TopHeader></TopHeader>

            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/user-manage/list" element={<UserList />}></Route>
                <Route path="/right-manage/role/list" element={<RoleList />}></Route>
                <Route path="/right-manage/right/list" element={<RightList />}></Route>

                {/* <Navigate from="/" to="/home" /> */}
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<NoPermission />} />
            </Routes>
        </div>
    )
}
