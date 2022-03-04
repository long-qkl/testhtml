import { Button, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    DeleteOutlined,
    EditOutlined,
} from '@ant-design/icons';

export default function RoleList() {

    const [showLoading, setShowLoading] = useState('')
    const [dataSource, setDataSource] = useState([])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '角色名称',
            dataIndex: 'roleName',
        },
        {
            title: '操作',
            render: (item) => {
                return <>
                    <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.roleType == 1 ? true : false} />
                    <Button style={{ marginLeft: '5px' }} type="primary" shape="circle" icon={<DeleteOutlined />} danger disabled={item.roleType == 1 ? true : false} />
                </>
            }
        },
    ]
    useEffect(() => {
        setShowLoading(true)
        axios.get('http://localhost:8000/roles').then(res => {
            console.log('res.data', res.data)
            setDataSource(res.data)
        }).then(() => setShowLoading(false))
    }, [])


    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={showLoading}
                rowKey={(item) => item.id}
            />
        </div>
    )
}
