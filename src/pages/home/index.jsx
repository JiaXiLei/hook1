import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import {
    homeGetData,  //获取数据
    homeDeleteData,  //删除
    homeAddData,  //添加
    homeUpData,  //修改
} from '@/action/home' //引用action
import './style.less'
import { Button, Input, Table } from 'antd'
import Modals from './modals'   //模态框组件引用


export default connect(state => {
    return {
        home: state.home
    }
}, {
    homeGetData,
    homeDeleteData,
    homeAddData,
    homeUpData,
})(Home)
function Home(props) {

    const { data } = props.home  //解析redux中传来的home数据
    const [title, setTitle] = useState('')  //定义模态框标题
    const [visible, setVisible] = useState(false)  //定义模态框是否隐藏状态
    const [formData, setFormdata] = useState([])  //定义模态框内表单数据回显的数据

    // 路由守卫
    useEffect(() => {
        if (JSON.stringify(props.home.user) == '{}') {
            props.history.push('/login')
        }
    }, [])
    // 第一次获取数据
    useEffect(() => {
        props.homeGetData()
    }, [])
    // 点击添加
    const add = () => {
        setTitle('添加')
        setVisible(true)
        setFormdata([])
    }
    // 点击删除
    const deleteData = (option) => {
        props.homeDeleteData(option)
        props.homeGetData()
    }
    // 点击修改
    const upDate = (option) => {
        setTitle('修改')
        setVisible(true)
        setFormdata(option)
    }
    // 关闭模态框，操作数据
    const visibleStatus = option => {
        if (option.id) {
            props.homeUpData(option)
        } else {
            props.homeAddData(option)
        }
        props.homeGetData()
        setVisible(false)
    }
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
        },
        {
            title: '操作',
            render: v => {
                return (
                    <React.Fragment>
                        <Button type='text' onClick={() => deleteData(v.id)}>删除</Button>
                        <Button type='text' onClick={() => upDate(v)}>修改</Button>
                    </React.Fragment>
                )
            }
        }
    ]
    return (
        <div className="pages-home">
            <header>
                <div className="home-input">
                    <Input placeholder="输入用户名" />
                    <Button type='primary'>搜用户</Button>
                </div>
                <div className="home-button">
                    <Button type='default'>批量删除</Button>
                    <Button type='primary' onClick={add}>添加用户</Button>
                </div>
            </header>
            <section>
                <Table
                    rowKey={v => v.id}
                    dataSource={data}
                    columns={columns}
                    pagination={{
                        pageSize: 5,  //每页几条数据
                        total: Number(data.length),  //多少条数据，默认给你分配多少页
                    }}
                >
                </Table>
                <Modals
                    visible={visible}
                    title={title}
                    formData={formData}
                    visibleStatus={visibleStatus}
                />
            </section>
        </div>
    )
}

