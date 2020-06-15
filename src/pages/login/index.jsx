import React, { useEffect, useState } from 'react';
import './style.less'

import { Form, Input, Button } from 'antd';
import { postAxios } from '@/utils/request'

export default function Login(props) {
    // console.log(props)
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = values => {
        postAxios('/api/index/qybapi/dologin', values)
            .then(res => console.log(res))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="pages-login">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="password" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">登录</Button>
                    <a onClick={() => props.history.push('/Registered')}>没有账号 注册</a>
                </Form.Item>
            </Form>
        </div>
    )
}