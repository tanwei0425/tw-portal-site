import { ClockCircleOutlined, FrownOutlined, SmileOutlined } from '@ant-design/icons'

const size = 20
export const ResumeDataSource = {
    wrapper: { className: 'home-page-wrapper resume-wrapper' },
    page: { className: 'home-page resume' },
    overPack: { playScale: 0.3 },
    titleWrapper: {
        className: 'resume-title-wrapper',
        children: [
            {
                name: 'title',
                className: 'resume-title-h1',
                children: '个人履历',
            },
            {
                name: 'content',
                className: 'resume-title-content',
                children: 'GE REN LU LI',
            },
        ],
    },
    blockWrapper: {
        className: 'resume-block-wrapper',
        gutter: 24,
        children: [
            {
                label: '2015-08 （实习）',
                name: '就读于东营职业学院，电气工程及其自动化专业。由于上学贪玩，学历不高，实习后开始尝试各项工作，去过电子厂，做过电网规划（其实就是抱着设备在山里打点，晚上回去画CAD图，廉价劳动力！），幸运的是在此结识了小会计---dear李小姐。',
                dot: <FrownOutlined style={{ fontSize: size }} />,
                color: "red",
            },
            {
                label: '2016-06（迷茫的半年）',
                name: '终于毕业了，很迷茫，不知道要干些什么，想了很久，决定学习编程，在朋友的推荐下挑选了PHP作为编程语言（当时据说PHP是世界上最好的语言），经历2个月自学，顺利找到了第一份工作（遗憾的是没有工资），然而更遗憾的事情是3月后公司倒闭了。',
                dot: <FrownOutlined style={{ fontSize: size }} />,
                color: "red",
            },
            {
                label: '2016-12（正式加入程序员大家庭）',
                name: '在山东艾索微卓信息科技有限公司担任PHP开发（ThinkPHP3 DedeCMS Mysql/Html Css Js），参与山东师范大学网站、济南静脉曲张医院后台管理系统和济南某军工采购管理系统的开发，在此期间对前端产生浓厚的兴趣，开启了前端自学之路。',
                dot: <SmileOutlined style={{ fontSize: size }} />,
                color: "green",
            },
            {
                label: '2017-06（入职中通天鸿（北京）通信科技股份有限公司）',
                name: <span>因家庭原因来到长春，入职中通天鸿（北京）通信科技股份有限公司，加入长春研发中心，担任前端开发工作，18年主要负责前端架构搭建，基于CRA脚手架，搭建企业脚手架（后期应用于多个大型项目）， 封装各种通用组件。并带领小组成员基于Ant Design扩展出一套企业级项目组件库，附上（<a href="http://components.icsoc.net/" target="_blank">链接</a>），闲暇时间会给员工进行前端培训，并继续深入前端技术领域， 可以说17、18年是我的职业前端学习年！</span>,
                dot: <SmileOutlined style={{ fontSize: size }} />,
                color: "green",
            },
            {
                label: '2019-03（加入吉林省吉林祥云信息技术有限公司）',
                name: '担任前端开发工程师（小项目偶尔全栈）。先后完成祥云开发者平台、社会救助核对系统、国家政策库、吉林省政务服务事项管理系统等研发工作，为吉林省电子政务方面做一份贡献，解决群众办事慢，办事难的问题。',
                dot: <SmileOutlined style={{ fontSize: size }} />,
                color: "green",
            },
            {
                label: '2020-02（疫情席卷全国）',
                name: '疫情蔓延， 国家推行健康码政策， 吉事办小程序由此诞生， 借助Taro强大的跨平台能力以及标准的ReactTs语法， 一套代码->架构了微信，支付宝，h5三端',
                dot: <SmileOutlined style={{ fontSize: size }} />,
                color: "green",
            },
            {
                label: '2021-06（从头开始）',
                name: '个人主页V1版正式上线，并纳入了随笔（博客）功能，准备从头开始记录程序猿生涯。',
                dot: <SmileOutlined style={{ fontSize: size }} />,
                color: "green",
            },
        ]
    },
};