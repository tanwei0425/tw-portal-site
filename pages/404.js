
/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-06 11:42:25
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 10:07:52
 * @FilePath: /jianli/web-index/pages/404.js
 */
import Router from 'next/router'
import { Result, Button } from 'antd';
import Layout from '@/layout'

export default function Home() {
    return (
        <Layout title={'404'}>
            <div style={{ marginTop: 48 }}>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button onClick={() => Router.push('/')} type="primary">返回首页</Button>}
                />
            </div>
        </Layout>
    )
}
