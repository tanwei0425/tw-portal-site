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
import Layouts from '@/layouts'
import Banner from '@/component/Banner';
import MyInfo from '@/component/MyInfo';
import Project from '@/component/Project';
import Technique from '@/component/Technique';
import Resume from '@/component/Resume';
import AnchorPoint from '@/component/AnchorPoint';
import commonActions from '@/stores/actions/common'
import { BannerDataSource } from '@/component/Banner/dataSource'
import { MyInfoDataSource } from '@/component/MyInfo/dataSource'
import { ProjectDataSource } from '@/component/Project/dataSource'
import { TechniqueDataSource } from '@/component/Technique/dataSource'
import { ResumeDataSource } from '@/component/Resume/dataSource'
class Home extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(commonActions.setDemo('class redux getInitialProps 测试'))
    return { ini: reduxStore.getState() };
  }
  constructor(props) {
    console.log(props, 'props');
    super(props);
    this.state = {
      isMobile: false,
      autoHideHeader: true,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((mobileStatus) => {
      this.setState({ isMobile: !!mobileStatus });
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
      autoHideHeader: scrollTop <= 80
    })
  }

  render() {
    const { isMobile, autoHideHeader } = this.state;
    const children = [
      <Banner
        id="banner"
        key="banner"
        dataSource={BannerDataSource}
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
      <Resume
        id="resume"
        key="resume"
        dataSource={ResumeDataSource}
        isMobile={isMobile}
      />,
      <MyInfo
        id="myInfo"
        key="myInfo"
        dataSource={MyInfoDataSource}
        isMobile={isMobile}
      />,
      <AnchorPoint
        key="AnchorPoint"
        data={[
          // 'nav',
          'banner',
          'technique',
          'project',
          'resume',
          'myInfo',
          // 'footer',
        ]}
        size="point-large"
      />,
    ];
    return (
      <Layouts title={'首页'} fixedHeader={true} autoHideHeader={autoHideHeader}>
        <div
          className="templates-wrapper"
          ref={(d) => {
            this.dom = d;
          }}
        >
          {children}
        </div>
      </Layouts>
    );
  }
}
/** 
* 和非nextjs使用redux class一致
* 开始：非getInitialProps正常使用class redux
*/
// const mapStateToProps = state => {
//   return {
//     demo: state.common.demo,
//   }
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     commonActions: bindActionCreators(commonActions, dispatch),
//     loginActions: bindActionCreators(loginActions, dispatch),
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
/**
* 结束：非getInitialProps正常使用class redux
*/
export default Home