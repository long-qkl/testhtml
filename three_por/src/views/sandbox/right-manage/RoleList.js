/* eslint-disable eqeqeq */
import { Button, Table, Modal, Tree } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    DeleteOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import {
    ExclamationCircleOutlined
} from '@ant-design/icons';

const { confirm } = Modal

export default function RoleList() {

    const [showLoading, setShowLoading] = useState('')
    const [dataSource, setDataSource] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const [treeData, setTreeData] = useState([])

    // const treeData = [
    //     {
    //       title: '0-0',
    //       key: '0-0',
    //       children: [
    //         {
    //           title: '0-0-0',
    //           key: '0-0-0',
    //           children: [
    //             {
    //               title: '0-0-0-0',
    //               key: '0-0-0-0',
    //             },
    //             {
    //               title: '0-0-0-1',
    //               key: '0-0-0-1',
    //             },
    //             {
    //               title: '0-0-0-2',
    //               key: '0-0-0-2',
    //             },
    //           ],
    //         },
    //         {
    //           title: '0-0-1',
    //           key: '0-0-1',
    //           children: [
    //             {
    //               title: '0-0-1-0',
    //               key: '0-0-1-0',
    //             },
    //             {
    //               title: '0-0-1-1',
    //               key: '0-0-1-1',
    //             },
    //             {
    //               title: '0-0-1-2',
    //               key: '0-0-1-2',
    //             },
    //           ],
    //         },
    //         {
    //           title: '0-0-2',
    //           key: '0-0-2',
    //         },
    //       ],
    //     },
    //     {
    //       title: '0-1',
    //       key: '0-1',
    //       children: [
    //         {
    //           title: '0-1-0-0',
    //           key: '0-1-0-0',
    //         },
    //         {
    //           title: '0-1-0-1',
    //           key: '0-1-0-1',
    //         },
    //         {
    //           title: '0-1-0-2',
    //           key: '0-1-0-2',
    //         },
    //       ],
    //     },
    //     {
    //       title: '0-2',
    //       key: '0-2',
    //     },
    //   ];

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
            return data.id != item.id
        }))
        axios.delete(`http://localhost:8000/roles/${item.id}`)

    }

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
                    <Button type="primary" shape="circle" icon={<BarsOutlined />} disabled={item.roleType == 1 ? true : false} onClick={() => {
                        setIsModalVisible(true)
                    }} />
                    <Button style={{ marginLeft: '5px' }} type="primary" shape="circle" icon={<DeleteOutlined />} danger disabled={item.roleType == 1 ? true : false} onClick={() => showDeleteConfirm(item)} />
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
        axios.get('http://localhost:8000/rights?_embed=children').then(res=>{
            setTreeData(res.data)
        })
    }, [])

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
    };

    const onExpand = (expandedKeysValue) => {
        console.log('onExpand', expandedKeysValue); 
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
      };


    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={showLoading}
                rowKey={(item) => item.id}
            />
            <Modal
                title="权限分配"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Tree
                    checkable
                    // onExpand={onExpand}
                    // expandedKeys={expandedKeys}
                    // autoExpandParent={autoExpandParent}
                    // onCheck={onCheck}
                    // checkedKeys={checkedKeys}
                    // onSelect={onSelect}
                    // selectedKeys={selectedKeys}
                    defaultCheckedKeys={['/home']}
                    treeData={treeData}
                    rowKey={(item)=>item.children}
                />
            </Modal>
        </>
    )
}
