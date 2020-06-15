import React from 'react'
import { Modal, Form, Input, Button } from 'antd';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};


export default function useModal(props) {

    const [form] = Form.useForm()

    const handleCancel = () => {
        props.visibleStatus()
    };
    const handleSubmit = valuse => {
        if(props.formData){
            valuse.id = props.formData.id   
        }
        props.visibleStatus(valuse)
        form.resetFields()
    }

    const { title, visible, formData } = props
    return (
        <div>
            <Modal
                title={title} //标题
                visible={visible} //visible 判断是否显示模态框 (true | false)
                onCancel={handleCancel}
                footer={null} //隐藏对话框下面的按钮
                destroyOnClose={true}
            >
                <Form
                    {...layout}
                    initialValues={formData}
                    onFinish={handleSubmit}
                    ref={form}
                // onFinishFailed={this.onFinishFailed}  //提交表单且数据验证失败后回调事件
                >
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[{ required: true, message: '请输入年龄！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="年龄"
                        name="age"
                        rules={[{ required: true, message: '请输入年龄！' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="地址"
                        name="address"
                        rules={[{ required: true, message: '请输入地址！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">确定</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}