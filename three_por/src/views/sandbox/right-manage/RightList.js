import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { Button, Table, Tag } from 'antd';
import { 
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

import './RightList.min.css'

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
    useEffect(() => {
        axios.get("http://localhost:8000/rights?_embed=children").then(res => {
            setdataSource(res.data);
        })
    }, [])

    const dianji=()=>{
        console.log('first')
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
            key: 'key',
            render: () => {
                return <>
                    <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={dianji} />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} danger onClick={dianji} />
                </>
            }
        },
    ];


    return (
        <div className='managelist'>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />
        </div>
    )
}
