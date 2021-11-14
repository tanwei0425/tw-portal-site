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
                    children: '/static/index-logo.png',
                },
                content: {
                    className: 'banner1-content',
                    children: '科技改变世界',
                    type: 'scale',
                    mode: 'smooth',
                },
                describe: {
                    className: 'banner1-describe',
                    children: 'KE JI GAI BIAN SHI JIE',
                    type: 'scale',
                    mode: 'smooth',
                },
                // button: { className: 'banner1-button', children: 'Learn More' },
            },
            {
                name: 'elem1',
                BannerElement: { className: 'banner-user-elem' },
                textWrapper: { className: 'banner1-text-wrapper' },
                bg: { className: 'bg bg1 kgdv7d97l7t-editor_css' },
                title: {
                    className: 'banner1-title',
                    children: '/static/index-logo.png',
                },
                content: {
                    className: 'banner1-content',
                    children: '技术改变命运',
                    type: 'bounce',
                    mode: 'smooth',
                },
                describe: {
                    className: 'banner1-describe',
                    children: 'JI SHU GAI BIAN MING YUN',
                    type: 'bounce',
                    mode: 'smooth',
                },
                // button: { className: 'banner1-button', children: 'Learn More' },
            },
        ],
        type: ['across'],
        autoPlaySpeed: 5000,
        autoPlay: true,
        sync: false,
        arrow: false,
        // thumb: false,
    },
};