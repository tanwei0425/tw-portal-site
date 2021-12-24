import React from 'react'
import { Tag, Space, Spin } from 'antd'
import { FireTwoTone } from '@ant-design/icons';
import './index.less'
const notesTag = ({ data, loading, tagsOnChange, selectedTags }) => {
    return (
        <div className='notes-tag'>
            <div className='notes-tag-title'>
                <span className='notes-tag-title-text'>热门标签</span>
                <FireTwoTone className='notes-tag-title-icon' twoToneColor='red' />
            </div>
            <div className='notes-tag-content'>
                <Spin spinning={loading}>
                    <Space size={[6, 14]} wrap>
                        {data?.map(val => {
                            return <Tag
                                key={val.id}
                                style={{ cursor: 'pointer' }}
                                color={selectedTags.includes(val.id) ? 'blue' : ''}
                                onClick={() => tagsOnChange(val.id)}
                            >
                                {val.name}
                            </Tag>
                        })}
                    </Space>
                </Spin>
            </div>
        </div>
    )
}

export default notesTag
