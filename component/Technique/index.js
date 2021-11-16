import React from 'react';
import { Row, Col, Button, message, Modal } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '@/utils';
import AllTechnique from './allTechnique';

class Technique extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }
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

  showModal = () => {
    this.setState({
      isModalVisible: true
    })
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  };

  render() {
    const { ...props } = this.props;
    const { isModalVisible } = this.state;
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
          <Button size='large' className={'allTechniqueBut'} onClick={this.showModal}>查看我的全部技术栈</Button>
          <Modal
            wrapClassName={'allTechniqueModal'}
            title={null}
            footer={null}
            centered={true}
            maskClosable={false}
            keyboard={false}
            visible={isModalVisible}
            onCancel={this.handleCancel}
            width={'90vw'}
            destroyOnClose={true}
          >
            {isModalVisible && <AllTechnique />}
          </Modal>
        </OverPack>
      </div>
    );
  }
}

export default Technique;
