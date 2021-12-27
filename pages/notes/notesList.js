import React from 'react'
import { List, Avatar, Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { dateTimeFormat } from '@/utils'
import './index.less'

const notesTag = ({ data = [], pageConfig, onChange, loading }) => {
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
                    loading={loading}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <Space><StarOutlined />152</Space>,
                                <Space><LikeOutlined />132</Space>,
                                <Space><MessageOutlined />99</Space>,
                            ]}
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
                                title={<a href={item.id}>{item.title}</a>}
                                description={<>
                                    <div>{item?.createdAt && dateTimeFormat(item.createdAt)}</div>
                                    <div>{item?.updatedAt && dateTimeFormat(item.updatedAt)}</div>
                                </>}
                            />
                            <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{item.content || '暂无描述'}</span>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default notesTag
