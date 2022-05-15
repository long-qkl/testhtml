import React, { useEffect, useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

export default function IndexRouter() {
 
    // console.log('token',localStorage.getItem('token'))
    return (
        <HashRouter>
            {/* switch被routes代替，routes包裹route，component={Login}改成element={<Login />} */}
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* V6版本router的重定向已经从Redirect更改成Navigate了 */}
                <Route
                    path="/*" //这里需要加上"*",否则匹配不到子路由
                    element={<NewsSandBox />}
                />
            </Routes>
        </HashRouter>
    )
}
