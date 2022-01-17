import React from 'react'
import { Layout,Menu } from 'antd';
import './SideMenu.min.css';
import {useNavigate} from 'react-router-dom';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider } = Layout;

//模拟数组结构
const menuList=[
  {
    key:'/home',
    title:'首页',
    icon:<UserOutlined />
  },
  {
    key:'/user-manage',
    title:'用户管理',
    icon:<UserOutlined />,
    children:[
      {
        key:'/user-manage/list',
        title:'用户列表',
        icon:<UserOutlined />
      }
    ]
  },
  {
    key:'/right-manage',
    title:'权限管理',
    icon:<UserOutlined />,
    children:[
      {
        key:'/right-manage/role/list',
        title:'角色列表',
        icon:<UserOutlined />
      },
      {
        key:'/right-manage/right/list',
        title:'权限列表',
        icon:<UserOutlined />
      },
    ]
  },
]

function SideMenu() {

  const RenderMenu=(menuList)=>{
    // withRouter在V6版本已经被usenavigated替换
    const navigate=useNavigate();
    return menuList.map((item)=>{
      if (item.children) {
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
          {/* 递归 */}
          {RenderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
        navigate(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

    return (
      // collapsed={this.state.collapsed}
        <Sider trigger={null} collapsible>
          <div className="logo">新闻发布管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {RenderMenu(menuList)}
          </Menu>
        </Sider>
    )
}
export default SideMenu