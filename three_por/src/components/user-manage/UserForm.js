import React, { forwardRef, useEffect, useState } from 'react'
import {
    Form,
    Input,
    Select
} from 'antd';

const { Option } = Select

// forwardRef含有两个形参props、ref
// 通过ref操控表单，props接收传进来的参数
const UserForm = forwardRef((props, ref) => {

    //控制区域的禁用情况
    const [isDisable, setisDisabled] = useState(false)

    useEffect(()=>{
        setisDisabled(props.isUpdateDisabled)
    },[props.isUpdateDisabled])

    return (
        <Form layout="vertical" ref={ref} >
            <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
                rules={[{
                    required: true,
                    message: '请输入密码'
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="region"
                label="区域"
                rules={
                    isDisable ? [] : [{
                        required: true,
                        message: 'Please input the title of collection!'
                    }]
                }
            >
                <Select allowClear disabled={isDisable}>
                    {
                        props.regionList.map(item => {
                            return <Option value={item.value} key={item.id}>{item.title}</Option>
                        })
                    }
                </Select>
            </Form.Item>

            <Form.Item
                name="roleId"
                label="角色权能"
                rules={[{
                    required: true,
                    message: '不能为空'
                }]}
            >
                <Select allowClear onChange={(value) => {
                    console.log(value)
                    //如果传入的value为1，即禁用区域input
                    value === 1
                        ?
                        (() => {
                            setisDisabled(true)
                            //调用ref里面的setFieldsValue 方法，直接将区域input的value置空
                            ref.current.setFieldsValue({
                                region: ''
                            })
                        })()
                        :
                        setisDisabled(false)
                }}>
                    {
                        props.roleList.map(item => {
                            return <Option value={item.id} key={item.id}>{item.roleName}</Option>
                        })
                    }
                </Select>
            </Form.Item>
        </Form>
    )
})

export default UserForm