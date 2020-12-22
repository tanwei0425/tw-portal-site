/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:31:36
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:49:05
 * @FilePath: /web-index/component/Footer/dataSource.js
 */
export const FooterDataSource = {
    wrapper: { className: 'home-page-wrapper footer1-wrapper' },
    OverPack: { className: 'footer1', playScale: 0.2 },
    block: {
        className: 'home-page',
        gutter: 0,
        children: [
            {
                name: 'block0',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    className: 'logo',
                    isImg: true,
                    children:
                        '/static/indexLogo.png',
                    // 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
                },
                childWrapper: {
                    className: 'slogan',
                    children: [
                        {
                            name: 'content0',
                            children: '比较懒不知道写点什么',
                        },
                    ],
                },
            },
            {
                name: 'block1',
                xs: 24,
                md: 6,
                className: 'block',
                title: { children: '产品' },
                childWrapper: {
                    children: [
                        { name: 'link0', href: '#', children: '个人组件库' },
                        { name: 'link1', href: '#', children: '个人后台管理系统' },
                        { name: 'link2', href: '#', children: '个人简历' },
                    ],
                },
            },
            {
                name: 'block2',
                xs: 24,
                md: 6,
                className: 'block',
                title: { children: '关于' },
                childWrapper: {
                    children: [
                        { href: '#', name: 'link1', children: '联系方式' },
                        { href: '#', name: 'link2', children: 'QQ' },
                        { href: '#', name: 'link3', children: 'tel' },
                        { href: '#', name: 'link4', children: '微信' },
                    ],
                },
            },
            {
                name: 'block3',
                xs: 24,
                md: 6,
                className: 'block',
                title: { children: '资源' },
                childWrapper: {
                    children: [
                        { href: '#', name: 'link0', children: '资源1' },
                        { href: '#', name: 'link1', children: '志愿2' },
                    ],
                },
            },
        ],
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
        className: 'copyright',
        children: (
            <span>
                © 2020 hellotanwei.cn 版权所有
                ICP证 : <a href="http://beian.miit.gov.cn">
                    鲁ICP备19058798号-2
                </a>
            </span>
        ),
    },
};