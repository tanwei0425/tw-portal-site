
export const NavDataSource = {
    wrapper: { className: 'header0 home-page-wrapper kgdvgox2cx-editor_css' },
    page: { className: 'home-page' },
    Menu: {
        className: 'header0-menu',
        children: [
            {
                name: '/',
                className: 'header0-item',
                children: {
                    children: [{ children: '首页', name: 'text' }],
                },
            },
            {
                name: 'applets',
                className: 'header0-item',
                children: {
                    children: [{ children: '小程序', name: 'text' }],
                },
                subItem: [
                    {
                        name: '/wxApplets',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '微信小程序',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '微信小程序文档描述',
                                },
                            ],
                        },
                    },
                    {
                        name: '/aliApplets',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: '支付宝小程序',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '支付宝小程序文档描述',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                name: 'app',
                className: 'header0-item',
                children: {
                    children: [{ children: '移动端', name: 'text' }],
                },
                subItem: [
                    {
                        name: '/ios',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: 'IOS',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: 'IOS文档描述',
                                },
                            ],
                        },
                    },
                    {
                        name: '/android',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: 'android',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: 'android文档描述',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                name: 'component',
                className: 'header0-item',
                typelink: 'href',
                children: {
                    href: 'https://components.hellotanwei.cn',
                    target: "_blank",
                    children: [{ children: '个人组件库', name: 'text' }],
                },
            },
            {
                name: '/resume',
                className: 'header0-item',
                children: {
                    children: [{ children: '个人简历', name: 'text' }],
                },
            },
            {
                name: 'admin',
                typelink: 'href',
                className: 'header0-item',
                children: {
                    href: 'https://admin.hellotanwei.cn/login',
                    target: "_blank",
                    children: [{ children: '后台管理', name: 'text' }],
                },
            },
        ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
};