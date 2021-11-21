/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:49:14
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-18 19:50:50
 * @FilePath: /jianli/web-index/component/Technique/index.js
 */
import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from '@/utils';

function Index({ dataSource, isMobile, ...tagProps }) {
  const { blockWrapper, titleWrapper } = dataSource;
  const childrenToRender = blockWrapper.children.map((item, i) => (
    <Col {...item} key={i.toString()}>
      <a {...item.children}>
        {item.children.children.map(getChildrenToRender)}
      </a>
    </Col>
  ));
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
        </div>

        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            interval={60}
            component={Row}
            {...blockWrapper}
          >
            {childrenToRender}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Index;
