/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:46:06
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-19 09:26:52
 * @FilePath: /jianli/web-index/component/Company/index.js
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Company(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
        scaleY: '+=0.3',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      }
      : {
        x: '-=30',
        opacity: 0,
        type: 'from',
        ease: 'easeOutQuad',
      },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div key="title" className={dataSource.title.className}>
        {dataSource?.title.children?.map(val => <div key={val.name} className={val?.className}>{val?.children}</div>)}
      </div>
      <OverPack {...dataSource.overPack} component={Row}>
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            md: dataSource.imgWrapper.md,
            xs: dataSource.imgWrapper.xs,
          }}
        >
          <img src={dataSource.img.children} alt="img" />
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >

          <div key="p" {...dataSource.content}>
            {dataSource.content?.children?.map((val, index) => {
              return <div key={index} className={'content1-content-info'}>
                {val.icon}
                {val?.text}
              </div>
            })}
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Company;
