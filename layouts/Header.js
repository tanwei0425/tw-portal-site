/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-09 13:27:13
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-22 16:08:54
 * @FilePath: /web-index/component/Layout/Header.js
 */
import React, { Component } from 'react';
import Nav from '@/component/Nav';
import {
    NavDataSource,
} from '@/component/Nav/dataSource.js';
export default class Header extends Component {
    render() {
        const { isMobile, autoHideHeader, fixedHeader } = this.props
        return (
            <Nav
                id="nav"
                key="nav"
                fixedHeader={fixedHeader}
                autoHideHeader={autoHideHeader}
                dataSource={NavDataSource}
                isMobile={isMobile}
            />
        );
    }
}
