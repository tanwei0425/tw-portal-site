import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Breadcrumb, Skeleton, Avatar } from 'antd'
import Layouts from '@/layouts'
import service from '@/service/notes'
import { dateTimeFormat } from '@/utils'
// import Prism from 'prismjs';
import '../index.less'
// @import 'https://resource.hellotanwei.cn/static/css/prism.css';
{/* <script src="https://resource.hellotanwei.cn/static/js/prism.js"></script> */ }
const Details = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = async () => {
        setLoading(true)
        const res = await service.getDetils(router.query.id);
        if (res.code === 200) {
            setData(res?.data || [])
        }
        setLoading(false)
    }
    return (
        <Layouts title={'随记'} isFooter={false} >

            <div className="notes">
                <div className='notes-layout'>
                    <div className='notes-layout-content'>
                        <Skeleton loading={loading} active avatar paragraph={{ rows: 8 }}>
                            <div className='notes-layout-content-title'>
                                <Breadcrumb.Item > <a onClick={() => router.push('/notes')}>随笔</a></Breadcrumb.Item>
                                <Breadcrumb.Item separator=''>{data?.title}</Breadcrumb.Item>
                            </div>
                            <div className='notes-details'>
                                <h1>{data?.title}</h1>
                                <div className='notes-details-basicInfo'>
                                    <div className='notes-details-basicInfo-div'>
                                        <Avatar size={'large'} className='notes-details-basicInfo-div-avatar' src={data?.avatar || '/static/user-logo.png'} />
                                        <span>{data?.author}</span>
                                    </div>
                                    <div className='notes-details-basicInfo-div'>浏览量：{data?.readNumber}</div>
                                    <div className='notes-details-basicInfo-div'>创建于：{data?.createdAt && dateTimeFormat(data.createdAt)}</div>
                                    <div className='notes-details-basicInfo-div'>更新于：{data?.updatedAt && dateTimeFormat(data.updatedAt)}</div>
                                </div>
                                <div className='notes-details-content'>
                                    <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                                </div>
                            </div>
                        </Skeleton>
                    </div>
                </div>
            </div>

        </Layouts>
    )
}

export default Details
