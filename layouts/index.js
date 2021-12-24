/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-09 13:26:01
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 17:48:16
 * @FilePath: /jianli/web-index/component/Layout/index.js
 */
import React, { Component } from "react";
import { BackTop } from 'antd'
import { enquireScreen } from 'enquire-js';
import Router from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';
import config from '@/config'
// 路由守卫
Router.events.on('routeChangeStart', url => {
    // routeChangeStart(url) - 路由开始切换时触发
    // routeChangeComplete(url) - 完成路由切换时触发
    // routeChangeError(err, url) - 路由切换报错时触发
    // beforeHistoryChange(url) - 浏览器 history 模式开始切换时触发
    // hashChangeStart(url) - 开始切换 hash 值但是没有切换页面路由时触发
    // hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发
    // console.log(url);
    // if(url !== '/' || url !== '/index') {
    //     location.href = './index'
    // }
});

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }
    render() {
        // fixedHeader 是否固定header
        const { children, title, fixedHeader, fixedFooter, autoHideHeader, isHeader = true, isFooter = true } = this.props;
        const { isMobile } = this.state;
        return (
            <>
                <Head>
                    <title>{title} - {config?.title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <meta name="keywords" content={`${title} - ${config?.title}`} />
                    <meta name="description" content={`${title} - ${config?.title}`} />
                </Head>
                {isHeader && <Header fixedHeader={fixedHeader} autoHideHeader={autoHideHeader} isMobile={isMobile} />}
                {children}
                {isFooter && <Footer fixedFooter={fixedFooter} isMobile={isMobile} />}
                <BackTop />
            </>
        );
    }
}

export default Layout;
