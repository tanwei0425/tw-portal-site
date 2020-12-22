/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:34:51
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:08:47
 * @FilePath: /web-index/component/Banner/dataSource.js
 */

export const BannerDataSource = {
    wrapper: { className: 'banner1' },
    BannerAnim: {
        children: [
            {
                name: 'elem0',
                BannerElement: { className: 'banner-user-elem' },
                textWrapper: { className: 'banner1-text-wrapper' },
                bg: { className: 'bg bg0 kgdvi38pkfn-editor_css' },
                title: {
                    className: 'banner1-title',
                    // children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
                    children: '/static/indexLogo.png',
                },
                content: {
                    className: 'banner1-content',
                    children: '谭伟的个人前端',
                },
                button: { className: 'banner1-button', children: 'Learn More' },
            },
            // {
            //     name: 'elem1',
            //     BannerElement: { className: 'banner-user-elem' },
            //     textWrapper: { className: 'banner1-text-wrapper' },
            //     bg: { className: 'bg bg1 kgdv7d97l7t-editor_css' },
            //     title: {
            //         className: 'banner1-title',
            //         children:
            //             'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
            //     },
            //     content: {
            //         className: 'banner1-content',
            //         children: '一个高效的页面动画解决方案',
            //     },
            //     button: { className: 'banner1-button', children: 'Learn More' },
            // },
            // {
            //     name: 'elem2',
            //     BannerElement: { className: 'banner-user-elem' },
            //     textWrapper: { className: 'banner1-text-wrapper' },
            //     bg: { className: 'bg bg2' },
            //     title: {
            //         className: 'banner1-title',
            //         children:
            //             'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
            //     },
            //     content: {
            //         className: 'banner1-content',
            //         children: '一个高效的页面动画解决方案',
            //     },
            //     button: { className: 'banner1-button', children: 'Learn More' },
            // },
        ],
        type: ['across'],
        autoPlaySpeed: 5000,
        autoPlay: true,
        sync: false,
    },
};