/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-06 11:42:25
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 16:28:00
 * @FilePath: /jianli/web-index/pages/index.js
 */
/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import Layout from '@/layout'
import Banner from '@/component/Banner';
import MyInfo from '@/component/MyInfo';
import Project from '@/component/Project';
import Technique from '@/component/Technique';
import AnchorPoint from '@/component/AnchorPoint';
import { BannerDataSource } from '@/component/Banner/dataSource'
import { MyInfoDataSource } from '@/component/MyInfo/dataSource'
import { ProjectDataSource } from '@/component/Project/dataSource'
import { TechniqueDataSource } from '@/component/Technique/dataSource'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      hideHeader: true,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    window.addEventListener('scroll', this.bindHandleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.bindHandleScroll);
  }
  bindHandleScroll = (event) => {
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || window.pageYOffset
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    this.setState({
      hideHeader: scrollTop <= 80
    })
  }

  render() {
    const { isMobile, hideHeader } = this.state;
    const children = [
      <Banner
        id="banner"
        key="banner"
        dataSource={BannerDataSource}
        isMobile={isMobile}
      />,
      <MyInfo
        id="myInfo"
        key="myInfo"
        dataSource={MyInfoDataSource}
        isMobile={isMobile}
      />,
      <Technique
        id="technique"
        key="technique"
        dataSource={TechniqueDataSource}
        isMobile={isMobile}
      />,
      <Project
        id="project"
        key="project"
        dataSource={ProjectDataSource}
        isMobile={isMobile}
      />,
      <AnchorPoint
        key="AnchorPoint"
        data={[
          // 'nav',
          'banner',
          'company',
          'technique',
          'project',
          // 'footer',
        ]}
        size="point-large"
      />,
    ];
    return (
      <Layout title={'首页'} fixed={true} hideHeader={hideHeader}>
        <div
          className="templates-wrapper"
          ref={(d) => {
            this.dom = d;
          }}
        >
          {children}
        </div>
      </Layout>
    );
  }
}
