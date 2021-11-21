import { EditOutlined, StarOutlined, Html5Outlined, LoginOutlined } from '@ant-design/icons'
export const NavDataSource = {
    page: { className: 'header-page' },
    Menu: {
        className: 'header0-menu',
        children: [
            {
                name: '/notes',
                className: 'header0-item',
                children: {
                    children: [
                        {
                            name: 'image0',
                            className: 'item-image',
                            children: <EditOutlined />
                        },
                        {
                            children: '随记', name: 'text'
                        }

                    ],
                },
            },
            {
                name: '/',
                className: 'header0-item',
                children: {
                    children: [{
                        children: 'T COLLECTION',
                        name: 'text'
                    }],
                },
            },

            {
                name: 'application',
                className: 'header0-item',
                children: {
                    children: [
                        {
                            name: 'image0',
                            className: 'item-image',
                            children: <StarOutlined />
                        },
                        {
                            children: '应用案例',
                            name: 'text'
                        }
                    ],
                },

                subItem: [
                    {
                        name: 'component',
                        className: 'header0-item',
                        typelink: 'href',
                        children: {
                            href: 'https://components.hellotanwei.cn',
                            target: "_blank",
                            children: [{
                                className: 'item-sub-item',
                                children: '组件库（文档架构完成）', name: 'text'
                            }],
                        },
                    },
                    {
                        name: '/babyName',
                        className: 'item-sub',
                        children: {
                            children: [{
                                className: 'item-sub-item',
                                children: '宝宝起名', name: 'text'
                            }],
                        },
                    },
                    // {
                    //     name: '/wxApplets',
                    //     className: 'item-sub',
                    //     children: {
                    //         className: 'item-sub-item',
                    //         children: [
                    //             {
                    //                 name: 'image0',
                    //                 className: 'item-image',
                    //                 children:
                    //                     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                    //             },
                    //             {
                    //                 name: 'title',
                    //                 className: 'item-title',
                    //                 children: '微信小程序',
                    //             },
                    //             {
                    //                 name: 'content',
                    //                 className: 'item-content',
                    //                 children: '微信小程序文档描述',
                    //             },
                    //         ],
                    //     },
                    // },
                ],
            },
            {
                name: '/resume',
                className: 'header0-item',
                children: {
                    children: [
                        {
                            name: 'image0',
                            className: 'item-image',
                            children: <Html5Outlined />
                        },
                        { children: 'Reveal简介', name: 'text' }
                    ],
                },
            },
            {
                name: 'admin',
                typelink: 'href',
                className: 'header0-item',
                style: { backgroundColor: 'transparent' },
                children: {
                    href: 'https://admin.hellotanwei.cn/login',
                    target: "_blank",
                    children: [
                        {
                            name: 'image0',
                            className: 'item-image',
                            children: <LoginOutlined />
                        },
                        {
                            children: '点击登陆', name: 'text'
                        }],
                },
            },
        ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
};