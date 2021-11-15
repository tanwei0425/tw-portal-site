export const TechniqueDataSource = {
    wrapper: { className: 'home-page-wrapper content5-wrapper' },
    page: { className: 'home-page content5' },
    overPack: { playScale: 0.3, className: 'content5-overPack' },
    titleWrapper: {
        className: 'content5-title',
        children: [
            { name: 'title', children: '我的技术栈', className: 'content5-title-h1' },
            {
                name: 'content',
                className: 'content5-title-text',
                children: 'WO DE JI SHU ZHAN',
            },
        ],
    },
    block: {
        className: 'content5-img-wrapper',
        gutter: 16,
        children: [
            {
                name: 'block0',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/antd.png',
                    },
                    content: {
                        children: 'Ant Design'
                    },
                },
            },
            {
                name: 'block1',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/react.png',
                    },
                    content: { children: 'React' },
                },
            },
            {
                name: 'block2',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/redux.png',
                    },
                    content: { children: 'Redux' },
                },
            },
            {
                name: 'block3',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/next.png',
                    },
                    content: { children: 'next' },
                },
            },
            {
                name: 'block4',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/egg.png',
                    },
                    content: { children: 'Eggjs' },
                },
            },
            {
                name: 'block5',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/vue.png',
                    },
                    content: { children: 'Vue' },
                },
            },
            {
                name: 'block6',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/apollo.png',
                    },
                    content: { children: 'Apollo' },
                },
            },
            {
                name: 'block7',
                className: 'block',
                lg: 6,
                md: 8,
                sm: 12,
                xs: 24,
                children: {
                    wrapper: { className: 'content5-block-content' },
                    img: {
                        children: '/static/graphql.png',
                    },
                    content: { children: 'Graphql' },
                },
            },
        ],
    },
};