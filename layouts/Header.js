/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-09 13:27:13
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:08:54
 * @FilePath: /web-index/component/Layout/Header.js
 */
import React, { Component } from 'react';
import Head from 'next/head';
import Nav from '@/component/Nav';
import {
    NavDataSource,
} from '@/component/Nav/dataSource.js';
import config from '@/config'
export default class Header extends Component {
    render() {
        const { isMobile, autoHideHeader, title, fixedHeader } = this.props
        return (
            <>
                <Head>
                    <title>{title} - {config?.title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <meta name="keywords" content={`${title} - ${config?.title}`} />
                    <meta name="description" content={`${title} - ${config?.title}`} />
                </Head>
                <Nav
                    id="nav"
                    key="nav"
                    fixedHeader={fixedHeader}
                    autoHideHeader={autoHideHeader}
                    dataSource={NavDataSource}
                    isMobile={isMobile}
                />
            </>
        );
    }
}
