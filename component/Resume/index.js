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
import { Row, Timeline } from 'antd';
import { getChildrenToRender } from '@/utils';

import { ClockCircleOutlined } from '@ant-design/icons'

function Index({ dataSource, isMobile, ...tagProps }) {
  const { blockWrapper: { children, ...restBlockWrapper }, titleWrapper } = dataSource;
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.overPack}>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            interval={300}
            component={Row}
            {...restBlockWrapper}
          >
            <Timeline mode="alternate">
              {children.map(({ name, ...restVal }, index) => {
                return <Timeline.Item key={index} {...restVal}>{name}</Timeline.Item>
              })}
            </Timeline>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Index;
