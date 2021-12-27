import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import Layouts from '@/layouts'
import service from '@/service/notes'
import NotesTag from '@/pages/notes/notesTag'
import NotesList from '@/pages/notes/notesList'
import './index.less'
// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://joeschmoe.io/api/v1/random',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }
const Index = () => {
    const [tagLoading, setTagLoading] = useState(false)
    const [listLoading, setListLoading] = useState(false)
    const [tagData, setTagData] = useState([])
    const [listData, setListData] = useState([])
    const [pageConfig, setPageConfig] = useState({
        total: 0,
        current: 1,
        pageSize: 10,
    });
    const [selectedTags, setSelectedTags] = useState([])
    useEffect(() => {
        getAllNotesClassification()
        getArticleList()
    }, [])

    const tagsOnChange = (val, checked) => {
        if (selectedTags.includes(val)) {
            const nextSelectedTags = selectedTags.filter(t => t !== val);
            setSelectedTags([...nextSelectedTags])
        } else {
            setSelectedTags([...selectedTags, val])
        }
    }

    const getAllNotesClassification = async () => {
        setTagLoading(true)
        const res = await service.getAllNotesClassification();
        if (res.code === 200) {
            setTagData(res?.data || [])
        }
        setTagLoading(false)
    }

    const getArticleList = async (newPage = pageConfig) => {
        setListLoading(true)
        const res = await service.getArticleList(newPage);
        if (res.code === 200) {
            console.log(res, 'res');
            setListData(res?.data?.list || [])
            setPageConfig({
                ...newPage,
                total: res?.data?.total || 0
            })
        }
        setListLoading(false)
    }

    const onChange = (current, pageSize) => {
        const newPage = {
            current,
            pageSize,
        }
        getArticleList(newPage)
    }
    return (
        <Layouts title={'随记'} isFooter={false} >
            <div className="notes">
                <div className='notes-layout'>
                    <div className='notes-layout-content'>
                        <NotesTag data={tagData} loading={tagLoading} selectedTags={selectedTags} tagsOnChange={tagsOnChange} />
                        <NotesList pageConfig={pageConfig} onChange={onChange} data={listData} loading={listLoading} />
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Index
