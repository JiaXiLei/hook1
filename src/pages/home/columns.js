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

export {
    columns
}