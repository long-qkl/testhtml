import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import './SideMenu.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import axios from 'axios';

const { Sider } = Layout;

//模拟数组结构
// const menuList = [
//   {
//     key: '/home',
//     title: '首页',
//     icon: <UserOutlined />
//   },
//   {
//     key: '/user-manage',
//     title: '用户管理',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '/user-manage/list',
//         title: '用户列表',
//         icon: <UserOutlined />
//       }
//     ]
//   },
//   {
//     key: '/right-manage',
//     title: '权限管理',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '/right-manage/role/list',
//         title: '角色列表',
//         icon: <UserOutlined />
//       },
//       {
//         key: '/right-manage/right/list',
//         title: '权限列表',
//         icon: <UserOutlined />
//       },
//       {
//         key: '/right-manage/right/lists',
//         title: '权限列表',
//         icon: <UserOutlined />
//       },
//     ]
//   },
// ]

const iconList = {
  '/home': <UserOutlined />,
  '/user-manage': <VideoCameraOutlined />,
  '/user-manage/list': <UploadOutlined />,
  '/right-manage': <VideoCameraOutlined />,
  '/right-manage/role/list': <UploadOutlined />,
  '/right-manage/right/list': <UploadOutlined />,
}

export default function SideMenu() {

  const [menus, setMenus] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/rights?_embed=children").then(res => {
      // console.log(res.data)
      setMenus(res.data)
    })
  }, [])

  // withRouter在V6版本已经被usenavigated替换
  //钩子请不要放在重复调用的函数里面,需要放在组件顶层
  const navigate = useNavigate();

  //权限控制
  const checkPagePermission = (item) => {
    return item.pagepermisson
    // return item.pagepermisson === 1
  }
  //刷新后默认的选择列表
  const locationUrl = useLocation();
  const openKeys = ["/" + locationUrl.pathname.split("/")[1]]
  // console.log('location', locationUrl.pathname);

  const RenderMenu = (menuList) => {
    // const params=useParams();

    return menuList.map(item => {

      if (item.children?.length > 0 && checkPagePermission(item)) {
        // const children = item.children.map((item) => {
        //   return <Menu.Item key={item.key} icon={item.icon} onClick={() => {
        //     navigate(item.key)
        //   }}>{item.title}</Menu.Item>
        // })
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
          {/* 递归 */}
          {RenderMenu(item.children)}
          {/* { children } */}
        </SubMenu>
      }
      return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
        // console.log(`params`, params)
        navigate(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

  return (
    // collapsed={this.state.collapsed}
    <Sider trigger={null} collapsible>
      <div style={{ display: "flex", height: "100%", flexDirection: "column"}}>
        <div className="logo">新闻发布管理系统</div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <Menu theme="dark" mode="inline" selectedKeys={locationUrl.pathname} defaultOpenKeys={openKeys}>
            {RenderMenu(menus)}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
