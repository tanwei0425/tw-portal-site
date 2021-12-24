/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-09 13:30:06
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-18 19:46:21
 * @FilePath: /jianli/web-index/component/layout/footer.js
 */
import React, { Component } from 'react';
import Footer from '@/component/Footer';
import {
    FooterDataSource,
} from '@/component/Footer/dataSource.js';

export default class Index extends Component {

    render() {
        const { isMobile, fixedFooter } = this.props
        return (
            <Footer
                id="footer"
                key="footer"
                fixedFooter={fixedFooter}
                dataSource={FooterDataSource}
                isMobile={isMobile}
            />
        );
    }
}
