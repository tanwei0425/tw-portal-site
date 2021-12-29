import React from 'react'
import { List, Avatar, Space } from 'antd'
import { EyeOutlined } from '@ant-design/icons';
import { dateTimeFormat } from '@/utils'
import './index.less'

const notesTag = ({ data = [], pageConfig, onChange, listItemClick, loading }) => {
    return (
        <>
            <div className='notes-title'>
                随笔
            </div>
            <div className='notes-list'>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        showQuickJumper: true,
                        showSizeChanger: true,
                        pageSizeOptions: ["10", "20", "50", "80"],
                        showTotal: (total, range) => `显示${range[0]}到${range[1]}, 共 ${total} 条数据`,
                        onChange,
                        ...pageConfig,
                    }}
                    rowKey={'id'}
                    loading={loading}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            className='notes-list-item'
                            key={item.title}
                            actions={[
                                <Space><EyeOutlined />152</Space>,
                            ]}

                            onClick={() => listItemClick(item.id)}
                            extra={
                                <img
                                    width={222}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={'large'} src={item?.avatar || '/static/user-logo.png'} />}
                                title={<a className='notes-list-item-title'>{item.title}</a>}
                                description={<>
                                    {/* <div>创建于：{item?.createdAt && dateTimeFormat(item.createdAt)}</div> */}
                                    <div>更新于：{item?.updatedAt && dateTimeFormat(item.updatedAt)}</div>
                                    <div>作者：{item?.author}</div>
                                </>}
                            />
                            <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{item.description || '暂无描述'}</span>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default notesTag
