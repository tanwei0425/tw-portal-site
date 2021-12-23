/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-06 11:42:25
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 14:17:17
 * @FilePath: /jianli/web-index/pages/_app.js
 */
import '@/styles/globals.less'
import '@/styles/common.less'
import App from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux'
import withReduxStore from '@/lib/with-redux-store'
import { ConfigProvider } from "antd";
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Head>
          {/* 解决antd在生产模式下刷新 组件样式闪一下的问题 */}
          {typeof window === 'undefined' && (
            <style
              id="holderStyle"
              dangerouslySetInnerHTML={{
                __html: `
                *, *::before, *::after {
                  transition: none!important;
                }
                `,
              }}
            />
          )}
        </Head>
        <ConfigProvider
          locale={zhCN}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
