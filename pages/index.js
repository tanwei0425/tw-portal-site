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
import Layout from '@/component/Layout'
import Banner from '@/component/Banner';
import Company from '@/component/Company';
import Technique from '@/component/Technique';
import Indicators from '@/component/Indicators';
import Teams from '@/component/Teams';
import AnchorPoint from '@/component/AnchorPoint';
import { BannerDataSource } from '@/component/Banner/dataSource'
import { CompanyDataSource } from '@/component/Company/dataSource'
import { TechniqueDataSource } from '@/component/Technique/dataSource'
import { IndicatorsDataSource } from '@/component/Indicators/dataSource'
import { TeamsDataSource } from '@/component/Teams/dataSource'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {

    const { isMobile } = this.state;
    const children = [
      <Banner
        id="banner"
        key="banner"
        dataSource={BannerDataSource}
        isMobile={isMobile}
      />,
      <Company
        id="company"
        key="company"
        dataSource={CompanyDataSource}
        isMobile={isMobile}
      />,
      <Technique
        id="technique"
        key="technique"
        dataSource={TechniqueDataSource}
        isMobile={isMobile}
      />,
      <Indicators
        id="indicators"
        key="indicators"
        dataSource={IndicatorsDataSource}
        isMobile={isMobile}
      />,
      <Teams
        id="teams"
        key="teams"
        dataSource={TeamsDataSource}
        isMobile={isMobile}
      />,
      <AnchorPoint
        key="AnchorPoint"
        data={[
          'banner',
          'company',
          'technique',
          'indicators',
          'teams',
        ]}
        size="point-large"
      />,
    ];
    return (
      <Layout title={'首页'}>
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
