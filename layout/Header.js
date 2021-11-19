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

export default class Header extends Component {
    render() {
        const { isMobile, hideHeader, title, fixed } = this.props
        return (
            <>
                <Head>
                    <title>{title} - T COLLECTION V1</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <meta name="keywords" content={`${title} - T COLLECTION V1`} />
                    <meta name="description" content={`${title} - T COLLECTION V1`} />
                </Head>
                <Nav
                    id="nav"
                    key="nav"
                    fixed={fixed}
                    hideHeader={hideHeader}
                    dataSource={NavDataSource}
                    isMobile={isMobile}
                />
            </>
        );
    }
}
