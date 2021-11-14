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
  return <ConfigProvider
    locale={zhCN}
  >
    <Component {...pageProps} />
  </ConfigProvider>
}

export default MyApp
