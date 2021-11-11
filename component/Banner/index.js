/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 18:34:36
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-19 14:31:22
 * @FilePath: /jianli/web-index/component/Banner/index.js
 */
import React, { PureComponent } from 'react';
import Link from 'rc-scroll-anim/lib/ScrollLink';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import classnames from 'classnames'
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import 'rc-texty/assets/index.css';

const { BgElement } = Element;
class Banner extends PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    const { className, ...rest } = dataSource.wrapper
    delete props.dataSource;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content, describe, button } = item;

      return (
        <Element key={i.toString()}  {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} />
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
            {...textWrapper}
          >
            {title && <div key="logo" {...title}>
              {typeof title.children === 'string' ? (
                <img src={title.children} width="100%" alt="img" />
              ) : (
                title.children
              )}
            </div>}
            {content && <Texty
              key="content"
              {...content}
            >
              {content.children}
            </Texty>}
            {describe && <Texty
              key="describe"
              {...describe}
            >
              {describe.children}
            </Texty>}
            {button && <Button ghost key="button" {...button}>
              {button.children}
            </Button>}
          </QueueAnim>
        </Element>
      );
    });
    const bannerClass = classnames(
      className,
      isMobile && 'bannerMobile'
    )
    return (
      <div {...props} {...rest} className={bannerClass}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner1-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <Link
            key={'company'}
            className='banner1-icon-button'
            to={'company'}
            toHash={false}
          >
            <DownOutlined />
          </Link>
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
