import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import Layouts from '@/layouts'
import service from '@/service/notes'
import NotesTag from '@/pages/notes/notesTag'
import NotesList from '@/pages/notes/notesList'
import './index.less'
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}
const Index = () => {
    const [tagLoading, setTagLoading] = useState(false)
    const [listLoading, setListLoading] = useState(false)
    const [data, setData] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    useEffect(() => {
        getAllNotesClassification()
    }, [])
    const getAllNotesClassification = async () => {
        setTagLoading(true)
        const res = await service.getAllNotesClassification();
        if (res.code === 200) {
            setData(res?.data || [])
        } else {
            message.error(res?.message)
        }
        setTagLoading(false)
    }
    const tagsOnChange = (val, checked) => {
        if (selectedTags.includes(val)) {
            const nextSelectedTags = selectedTags.filter(t => t !== val);
            setSelectedTags([...nextSelectedTags])
        } else {
            setSelectedTags([...selectedTags, val])
        }
    }
    return (
        <Layouts title={'随记'} isFooter={false} >
            <div className="notes">
                <div className='notes-layout'>
                    <div className='notes-layout-content'>
                        <NotesTag data={data} loading={tagLoading} selectedTags={selectedTags} tagsOnChange={tagsOnChange} />
                        <NotesList data={listData} loading={listLoading} />
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Index
