import React from 'react';
import { Row, Col, Button, message } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils';

class Technique extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    });
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
        </div>
        <OverPack
          className={`content-template ${props.className}`}
          {...dataSource.overPack}
        >
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeInOutQuad',
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
            {...dataSource.block}
          >
            {childrenToRender}
          </TweenOneGroup>
          <Button size='large' className={'allTechniqueBut'} onClick={() => message.error('功能待开发')}>查看所有技术栈</Button>
        </OverPack>

      </div>
    );
  }
}

export default Technique;
