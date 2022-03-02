import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { Button, Table, Tag, Modal } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';

import './RightList.min.css'

const { confirm } = Modal

export default function RightList() {
    // const locationUrl=useLocation();
    // let setUrl=locationUrl.pathname
    // console.log(setUrl);
    // useEffect(()=>{
    //     // setInterval(()=>{
    //         axios.get("http://localhost:8000/rights").then(res=>{
    //             console.log(res.data);
    //         })
    //     // },1000)
    //     console.log('RightList进来了');
    // },[])
    const [dataSource, setdataSource] = useState([])
    const [showTable, setshowTable] = useState('')
    useEffect(() => {
        setshowTable(true)
        axios.get("http://localhost:8000/rights?_embed=children").then(res => {
            let lists = res.data
            lists.map(item => {
                if (item.children.length == 0) {
                    item.children = ''
                }
            })
            setdataSource(lists);
        }).then(() => {
            setshowTable(false)
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
        if (item.grade == 1) {
            setdataSource(dataSource.filter(data => {
                return data.id != item.id
            }))
            axios.delete(`http://localhost:8000/rights/${item.id}`)
        } else if (item.grade == 2) {
            //2级接口
            let list = dataSource.filter(data => data.id == item.rightId)
            list[0].children = list[0].children.filter((data) => {
                return data.id != item.id
            })
            setdataSource([...dataSource])
            axios.delete(`http://localhost:8000/children/${item.id}`)
        }

    }


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '权限名称',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '权限路径',
            dataIndex: 'key',
            key: 'key',
            render: (key) => {
                return <Tag color="orange">{key}</Tag>
            }
        },
        {
            title: '操作',
            render: (item) => {
                return <>
                    <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => {
                        showDeleteConfirm(item)
                    }} />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} danger onClick={() => {
                        showDeleteConfirm(item)
                    }} />
                </>
            }
        },
    ];


    return (
        <div className='managelist'>
            <Table dataSource={dataSource} columns={columns} loading={showTable} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} pagination={{
                pageSize: 5,
                simple: true
            }} />
        </div>
    )
}
