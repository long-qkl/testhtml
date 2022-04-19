import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
// import { useLocation } from 'react-router-dom'

import {
    Button,
    Table,
    Switch,
    Modal,
} from 'antd';
import {
    DeleteOutlined,
    ExclamationCircleOutlined,
    EditOutlined,
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
    const [isUpdateVisible, setisUpdateVisible] = useState(false)
    const updateForm = useRef(null)
    const [isUpdateDisabled, setIsUpdateDisabled] = useState(false)
    const [current, setCurrent] = useState(null)

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

    //显示修改框函数
    const handleUpdate = (item) => {
        console.log('sdlkfjlsdf', item)
        //这里会有====》对话框模块还没显示，也就是表单还没挂载就调用了setFieldsValue，所以报错      解决方法：添加一个延时器即可
        // setisUpdateVisible(true)
        // updateForm.current.setFieldsValue(item)

        setTimeout(() => {
            setisUpdateVisible(true)

            //控制子组件状态更改
            item.roleId === 1 ? setIsUpdateDisabled(true) : setIsUpdateDisabled(false)

            updateForm.current.setFieldsValue(item)
        }, 0);
        setCurrent(item)
    }

    const handleUpdateOk = () => {

        console.log(updateForm)
        updateForm.current.validateFields().then(value => {
            console.log(value)
            setisUpdateVisible(false)
            // updateForm.current.resetFields()
            //patch到后端，生成id，再设置datasource ,方便后面的删除和更新

            //发起请求，修改数据
            axios.patch(`http://localhost:8000/users/${current.id}`,{
                ...value,
            }).then(res=>{
                console.log('123458',res.data)
                //再次发起请求，重新获取已经修改的数据
                axios.get("http://localhost:8000/users?_expand=role").then((res) => {
                    setDataSource(res.data)
                })
            })
            setIsUpdateDisabled(!isUpdateDisabled)

        }).catch(err => {
            console.log(err)
        })
    }

    // //添加
    const addUsers = () => {
        console.log("sldkjf")
        addForm.current.validateFields().then(value => {
            console.log(value)
            setIsAddVisible(false)
            //提交后清空原数据 ====>addForm.current.resetFields()
            // addForm.current.setFieldsValue({
            //     region: '',
            //     roleId: '',
            //     password: '',
            //     username: ''
            // })
            addForm.current.resetFields()
            //post到后端，生成id，再设置datasource ,方便后面的删除和更新

            axios.post(`http://localhost:8000/users`, {
                ...value,
                'roleState': true,
                'default': false
            }).then(res => {
                //这里的数据拼接后角色权能不显示，重新请求DataSource
                console.log("查看users请求的数据", res.data)
                setDataSource([...dataSource, res.data])
                axios.get("http://localhost:8000/users?_expand=role").then((res) => {
                    setDataSource(res.data)
                })
            })

        }).catch(err => {
            console.log(err)
        })
    }

    const columns = [
        {
            title: '区域',
            dataIndex: 'region',
            filters: [
                ...regionList.map(item=>({
                    text: item.title,
                    value: item.value
                })),
                {
                    text: "全球",
                    value: ""
                }
            ],
            onFilter: (value,item)=>{
                return item.region===value
            },
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
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                        disabled={item.default}
                        onClick={() => {
                            handleUpdate(item)
                        }}
                    />
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

            <Modal
                visible={isUpdateVisible}
                title="编辑用户"
                okText="确定修改"
                cancelText="取消"
                onCancel={() => {
                    setisUpdateVisible(false)
                    setIsUpdateDisabled(!isUpdateDisabled)
                }}
                onOk={() => {
                    handleUpdateOk()
                }}
            >
                <UserForm regionList={regionList} roleList={roleList} ref={updateForm} isUpdateDisabled={isUpdateDisabled} />
            </Modal>
        </div>
    )
}
