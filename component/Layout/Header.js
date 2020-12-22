/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-09 13:27:13
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 17:48:47
 * @FilePath: /jianli/web-index/component/layout/header.js
 */
import React, { Component } from 'react';
import Head from 'next/head';
import Nav from '@/component/Nav';
import {
    NavDataSource,
} from '@/component/Nav/dataSource.js';

export default class Header extends Component {
    render() {
        const { isMobile, isHeader, title } = this.props
        return (
            <>
                <Head>
                    <title>{title} - 谭伟个人门户</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <meta name="keywords" content={`${title} - 谭伟个人门户`} />
                    <meta name="description" content={`${title} - 谭伟个人门户`} />
                </Head>
                {isHeader && <Nav
                    id="nav"
                    key="nav"
                    dataSource={NavDataSource}
                    isMobile={isMobile}
                />}
            </>
        );
    }
}
