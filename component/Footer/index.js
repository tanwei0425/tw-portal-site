/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:29:48
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 11:17:21
 * @FilePath: /jianli/web-index/component/Footer/index.js
 */
import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender, isImg } from '@/utils';

class Footer extends Component {
    static defaultProps = {
        className: 'footer1',
    };

    getLiChildren = (data) =>
        data.map((item, i) => {
            const { title, childWrapper, ...itemProps } = item;
            return (
                <Col key={i.toString()} {...itemProps} title={null} content={null}>
                    <h2 {...title}>
                        {typeof title.children === 'string' &&
                            title.children.match(isImg) ? (
                                <img src={title.children} width="100%" alt="img" />
                            ) : (
                                title.children
                            )}
                    </h2>
                    <div {...childWrapper}>
                        {childWrapper.children.map(getChildrenToRender)}
                    </div>
                </Col>
            );
        });

    render() {
        const { ...props } = this.props;
        const { dataSource } = props;
        delete props.dataSource;
        delete props.isMobile;
        const childrenToRender = this.getLiChildren(dataSource.block.children);
        return (
            <div {...props} {...dataSource.wrapper}>
                <OverPack {...dataSource.OverPack}>
                    <QueueAnim
                        type="bottom"
                        key="ul"
                        leaveReverse
                        component={Row}
                        {...dataSource.block}
                    >
                        {childrenToRender}
                    </QueueAnim>
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        key="copyright"
                        {...dataSource.copyrightWrapper}
                    >
                        <div {...dataSource.copyrightPage}>
                            <div {...dataSource.copyright}>
                                {dataSource.copyright.children}
                            </div>
                        </div>
                    </TweenOne>
                </OverPack>
            </div>
        );
    }
}

export default Footer;
