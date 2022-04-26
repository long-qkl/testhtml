import React,{useEffect} from 'react'
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

export default function IndexRouter() {
    //istoken是由于登录跳转时发现localStorage.getItem在组件中设置后，这里却在打开页面的时候已经获取了个空的token，导致这里路由跳转失败
    //所以在这里写了个定时器获取token
    const istoken=()=>{
        const timer=setInterval(function(){
            const token=localStorage.getItem('token')
            // console.log("indexrouter",token)
            if(token){
                clearInterval(timer)
                // console.log("进来了")
                return true
            }
        },100)
    }
    useEffect(() => {
        istoken()
    }, [])
    

    return (
        <HashRouter>
            {/* switch被routes代替，routes包裹route，component={Login}改成element={<Login />} */}
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* V6版本router的重定向已经从Redirect更改成Navigate了 */}
                <Route 
                    path="/*" //这里需要加上"*",否则匹配不到子路由
                    element={ 
                        istoken
                        ? 
                        <NewsSandBox /> 
                        : 
                        <Navigate to="/login" /> 
                    } 
                />
            </Routes>
        </HashRouter>
    )
}
