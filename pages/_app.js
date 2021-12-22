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
import { ConfigProvider } from "antd";
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en');
function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('holderStyle').remove();
    })
  }
  return <ConfigProvider
    locale={zhCN}
  >
    <Component {...pageProps} />
  </ConfigProvider>
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}
export default MyApp
