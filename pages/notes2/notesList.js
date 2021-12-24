import React from 'react'
import { List, Avatar, Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './index.less'

const notesTag = ({ data = [], loading }) => {
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
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
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
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default notesTag
