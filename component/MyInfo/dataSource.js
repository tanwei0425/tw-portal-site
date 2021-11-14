/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:46:23
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:11:30
 * @FilePath: /web-index/component/Company/dataSource.js
 */
import { Tag, Typography, Popover } from 'antd'
import { UserOutlined, WechatOutlined, QqOutlined, QrcodeOutlined, ManOutlined, TagsOutlined, HomeOutlined } from '@ant-design/icons'
const { Paragraph } = Typography;
export const MyInfoDataSource = {
    wrapper: { className: 'home-page-wrapper content1-wrapper' },
    OverPack: { className: 'home-page content1', playScale: 0.3 },
    imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
    img: {
        children: '/static/user-logo.png',
    },
    textWrapper: { className: 'content1-text', md: 14, xs: 24 },
    title: { className: 'content1-title', children: '关于我' },
    content: {
        className: 'content1-content',
        children: [
            {
                icon: <UserOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text'}>
                    <span className={'content1-content-info-text-name'}>*伟</span>
                    <ManOutlined style={{ color: '#1890ff' }} className='content1-content-info-icon' />
                </span>,
            },
            {
                icon: <TagsOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text'}>
                    <Tag color="#f50">94年程序员</Tag>
                    <Tag color="#2db7f5">双子座</Tag>
                    <Tag color="#87d068">178CM</Tag>
                    <Tag color="#108ee9">这不是胖，是壮</Tag>
                </span>,
            },
            {
                icon: <UserOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text-name'}>
                    热爱编程/熬夜达人/学东西就是个快!
                </span>,
            },
            {
                icon: <HomeOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text-name'}>
                    坐标长春/籍贯山东/拥有一个漂亮女人事（财务）和一个待出生的小宝宝
                </span>,
            },
            {
                icon: <WechatOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text-name'}>
                    <Paragraph style={{ display: 'inline-block', marginBottom: 0 }} copyable={{ text: 'lqw1kb' }}>lqw1kb</Paragraph>

                    <Popover content={<img style={{ width: 240, height: 240 }} src='/static/wechat.jpg' />} title={false} trigger="click">
                        <QrcodeOutlined style={{ color: '#13c2c2', cursor: 'pointer', marginLeft: 8, fontSize: 17 }} />
                    </Popover>
                </span>,
            },
            {
                icon: <QqOutlined className='content1-content-info-icon' />,
                text: <span className={'content1-content-info-text-name'}>
                    <Paragraph style={{ display: 'inline-block', marginBottom: 0 }} copyable={{ text: '395128711' }}>395128711</Paragraph>
                </span>,
            },
        ]
        // '5年前端工作经验，2年前端架构经验，对项目、人员管理有一定经验，熟悉DevOps转型工作，对可持续交付、TDD、 敏捷开发有一定了解。',
    },
};