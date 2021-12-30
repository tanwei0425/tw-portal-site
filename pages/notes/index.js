import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd'
import Layouts from '@/layouts'
import service from '@/service/notes'
import NotesTag from '@/pages/notes/notesTag'
import NotesList from '@/pages/notes/notesList'
import './index.less'

const Index = () => {
    const router = useRouter();
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
            getArticleList({
                current: 1,
                pageSize: 10,
            }, nextSelectedTags)
        } else {
            setSelectedTags([...selectedTags, val])
            getArticleList({
                current: 1,
                pageSize: 10,
            }, [...selectedTags, val])
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

    const getArticleList = async (newPage = pageConfig, searchData = []) => {
        setListLoading(true)
        console.log(searchData, 'searchData');
        const res = await service.getArticleList(
            {
                ...newPage,
                classification: searchData?.join(),
            }
        );
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
        getArticleList(newPage, selectedTags)
    }

    const listItemClick = (id) => {
        console.log(id, 'id');
        router.push('/notes/details/[id]', `/notes/details/${id}`)
    }
    return (
        <Layouts title={'随记'} isFooter={false} >
            <div className="notes">
                <div className='notes-layout'>
                    <div className='notes-layout-content'>
                        <div className='notes-layout-content-title'>
                            <Breadcrumb.Item separator=''>随笔</Breadcrumb.Item>
                        </div>
                        <NotesTag data={tagData} loading={tagLoading} selectedTags={selectedTags} tagsOnChange={tagsOnChange} />
                        <NotesList pageConfig={pageConfig} onChange={onChange} listItemClick={listItemClick} data={listData} loading={listLoading} />
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Index
