import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
// import { useLocation } from 'react-router-dom'

import {
    Button,
    Table,
    Switch,
    Modal,
    Select
} from 'antd';
import {
    DeleteOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import UserForm from '../../../components/user-manage/UserForm';

const { confirm } = Modal

export default function UserList() {

    const [dataSource, setDataSource] = useState([])
    const [showTable, setshowTable] = useState('')
    const [isAddVisible, setIsAddVisible] = useState(false)
    const [regionList, setRegionList] = useState([])
    const [roleList, setRoleList] = useState([])
    const addForm = useRef(null)

    useEffect(() => {
        setshowTable(true)
        axios.get("http://localhost:8000/users?_expand=role").then((res) => {
            console.log(res.data);
            setDataSource(res.data)
            setshowTable(false)
        })
        axios.get("http://localhost:8000/regions").then((res) => {
            console.log(res.data);
            setRegionList(res.data)
        })
        axios.get("http://localhost:8000/roles").then((res) => {
            setRoleList(res.data)
        })
    }, [])

    const showDeleteConfirm = (item) => {
        confirm({
            title: '是否删除当前权限',
            icon: <ExclamationCircleOutlined />,
            // content: '描述',
            okText: '确认删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                deleteMethod(item)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    //删除函数
    const deleteMethod = (item) => {
        console.log('item', item)
        //页面需要同步+请求后端接口进行删除
        //进行层级判断，若有多级，则需要进行多次判断

        setDataSource(dataSource.filter(data => {
            return data.id !== item.id
        }))
        axios.delete(`http://localhost:8000/users/${item.id}`)

    }

    const changeSwitchMethod = (item) => {
        console.log('item', item)
        // item.roleState=!item.roleState

        item.roleState = item.roleState === true ? false : true
        //与页面数据同步
        setDataSource([...dataSource])

        axios.patch(`http://localhost:8000/users/${item.id}`, {
            roleState: item.roleState
        })
    }

    // //添加
    const addUsers = () => {
        console.log("sldkjf")
        addForm.current.validateFields().then(value => {
            console.log(value)
            setIsAddVisible(false)
            addForm.current.setFieldsValue({
                region: '',
                roleId: '',
                password: '',
                username: ''
            })
            //post到后端，生成id，在设置datasource ,方便后面的删除和更新

            axios.post(`http://localhost:8000/users`,{
                ...value,
                'roleState': true,
                'default':false
            }).then(res=>{
                console.log("查看users请求的数据",res.data)
                setDataSource([...dataSource,res.data])
            })

        }).catch(err => {
            console.log(err)
        })
    }

    const columns = [
        {
            title: '区域',
            dataIndex: 'region',
            render: (region) => {
                return <b>{region === '' ? '全球' : region}</b>
            }
        },
        {
            title: '角色权能',
            dataIndex: 'role',
            render: (role) => {
                return (
                    <>
                        <span>{role?.roleName}</span>
                    </>
                );
            }
        },
        {
            title: '用户名',
            dataIndex: 'username',
        },
        {
            title: '用户状态',
            dataIndex: 'roleState',
            render(roleState, item) {

                // console.log(roleState);
                return (
                    <>
                        <Switch
                            checked={roleState}
                            disabled={item.default}
                            onClick={() => {
                                changeSwitchMethod(item);
                            }}
                        />
                    </>
                );
            }
        },
        {
            title: '操作',
            render: (item) => {
                return <>
                    <Button
                        style={{ marginLeft: '5px' }}
                        type="primary"
                        shape="circle"
                        disabled={item.default}
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => {
                            showDeleteConfirm(item)
                        }}
                    />
                </>
            }
        }
    ];

    return (
        <div>
            <Button
                style={{ marginBottom: 5 }}
                type="primary"
                onClick={() => {
                    setIsAddVisible(true)
                }}
            >
                添加
            </Button>
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={showTable}
                scroll={{ y: 600 }}
                pagination={{
                    pageSize: 5,
                    simple: true
                }}
                rowKey={(item) => item.id}
            />
            <Modal
                visible={isAddVisible}
                title="添加用户"
                okText="确定"
                cancelText="取消"
                onCancel={() => {
                    setIsAddVisible(false)
                }}
                onOk={() => {
                    addUsers()
                }}
            >
                <UserForm regionList={regionList} roleList={roleList} ref={addForm} />
            </Modal>
        </div>
    )
}
