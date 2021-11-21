/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-06 11:42:25
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 17:42:45
 * @FilePath: /jianli/web-index/pages/resume/index.js
 */
import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import Router from 'next/router'
import Layout from '@/Layout'
const Index = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // 给iframe绑定next/router跳转函数
        window.iframeGoBack = () => Router.push('/')
        return () => delete window.iframeGoBack
    }, []);
    return (
        <Layout title={'个人简历'} isHeader={false} isFooter={false}>
            <Spin spinning={loading} size={'large'} tip={'加载中'}>
                <iframe
                    name="resume"
                    style={{ width: '100%', height: '100vh', overflow: 'visible' }}
                    onLoad={() => setLoading(false)}
                    src="/reveal/demo.html"
                    scrolling="no"
                    frameBorder="0"
                />
            </Spin>
        </Layout>
    )
}

export default Index