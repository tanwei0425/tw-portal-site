/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:46:23
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:11:30
 * @FilePath: /web-index/component/Company/dataSource.js
 */
export const CompanyDataSource = {
    wrapper: { className: 'home-page-wrapper content1-wrapper' },
    OverPack: { className: 'home-page content1', playScale: 0.3 },
    imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
    img: {
        children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
    },
    textWrapper: { className: 'content1-text', md: 14, xs: 24 },
    title: { className: 'content1-title', children: '个人介绍' },
    content: {
        className: 'content1-content',
        children:
            '5年前端工作经验，2年前端架构经验，对项目、人员管理有一定经验，熟悉DevOps转型工作，对可持续交付、TDD、 敏捷开发有一定了解。',
    },
};