/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-06 11:42:25
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-20 17:42:45
 * @FilePath: /jianli/web-index/pages/resume/index.js
 */
import React, { useState, useEffect } from 'react'
import { Table, Modal, Button, Row, Col, Spin, Form, Select, Input, message, } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import Layout from '@/layout'
import moment from 'moment';
import './index.less'

const { confirm } = Modal;
const { Option } = Select;

// const url = 'http://localhost:7002'
const url = 'https://api.hellotanwei.cn'


const getBabyList = async (params) => {
    const res = await axios({
        url: `${url}/admin/v1/baby`,
        params,
        method: 'get',
    })
    return res
}
const addBabyName = async (data) => {
    const res = await axios({
        url: `${url}/admin/v1/baby`,
        data,
        method: 'post',
    })
    return res
}
const deleteBabyName = async (id) => {
    const res = await axios({
        url: `${url}/admin/v1/baby/${id}`,
        method: 'delete',
    })
    return res
}
// export const getStaticProps = async () => {
//     const res = await getBabyList({
//         current: 1,
//         pageSize: 10,
//     })
//     return {
//         props: {
//             data: res.data.data
//         }
//     }
// }

const Index = () => {
    const [dataSource, setDataSource] = useState([]);
    const [pageConfig, setPageConfig] = useState({
        total: 0,
        current: 1,
        pageSize: 10,
    });
    const [loading, setLoaidng] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const changeModal = (status) => {
        setIsModalVisible(status);
        !status && form.resetFields();
    };

    const handleOk = () => {
        form.validateFields().then(async (values) => {
            console.log(values, 'values');
            setModalLoading(true)
            const { data } = await addBabyName(values)
            if (data?.code === 200) {
                message.success('谢谢他叔')
                changeModal(false)
                getTable()
            } else {
                message.error(data.message)
            }
            setModalLoading(false)
        })
    };

    const showConfirm = (record) => {
        confirm({
            title: '是真的要删除这个宝宝名吗?',
            icon: <ExclamationCircleOutlined />,
            centered: true,
            onOk: async () => {
                const { data } = await deleteBabyName(record?.id)
                if (data?.code === 200) {
                    message.success('继续想想')
                    getTable()
                } else {
                    message.error(data.message)
                }
            },
        });
    }

    const getTable = async (newPage = pageConfig) => {
        setLoaidng(true)
        const { data } = await getBabyList(newPage);
        if (data.code === 200) {
            setDataSource(data?.data?.list || [])
            setPageConfig({
                ...newPage,
                total: data?.data?.total || 0
            })
        } else {
            message.error(data?.message)
        }
        setLoaidng(false)
    }

    useEffect(() => {
        getTable({
            current: 1,
            pageSize: 10,
        })
    }, [])
    const onChange = (paginationConfig) => {
        const newPage = {
            current: paginationConfig?.current,
            pageSize: paginationConfig?.pageSize,
        }
        getTable(newPage)
    };

    const searchTable = () => {
        const addName = form.getFieldValue('addName')
        getTable({
            current: 1,
            pageSize: 10,
            addName
        })
    };
    const resetTable = () => {
        form.resetFields()
        getTable({
            current: 1,
            pageSize: 10,
        })
    };


    const columns = [
        {
            title: '宝宝姓名',
            dataIndex: 'name',
        },
        {
            title: '添加人员',
            dataIndex: 'addName',
        },
        {
            title: '添加时间',
            dataIndex: 'createdAt',
            render: (text) => text && moment(text).format('YYYY-MM-DD HH:mm:ss'),
        },
        {
            title: '添加地点',
            dataIndex: 'address',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) => {
                return <Button danger onClick={() => showConfirm(record)}>删除</Button>
            },
        },
    ];
    return (
        <Layout title={'宝宝名字'} isFooter={false}>
            <div className="babyName">
                <Table
                    className={{ width: '100%' }}
                    title={() =>
                        <Row justify='space-between' align='middle'>
                            <Col>
                                <Form
                                    form={form}
                                    layout='inline'
                                    labelCol={{ span: 7 }}
                                    wrapperCol={{ span: 17 }}
                                    name="form-baby-name-search"
                                >
                                    <Form.Item
                                        name="addName"
                                        label="添加人员"
                                        style={{ width: 220, margin: 8 }}
                                    >
                                        <Select
                                            showSearch
                                            allowClear
                                            placeholder='请选择添加人员'
                                        >
                                            <Option value="卢闯">卢闯</Option>
                                            <Option value="李行">李行</Option>
                                            <Option value="马川">马川</Option>
                                            <Option value="大宝">大宝</Option>
                                            <Option value="同同">同同</Option>
                                            <Option value="峰子">峰子</Option>
                                            <Option value="阿梁">阿梁</Option>
                                            <Option value="李威">李威</Option>
                                            <Option value="其他">其他</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item style={{ width: 220, margin: 8 }}>
                                        <Button type='primary' style={{ marginRight: 8 }} onClick={searchTable}>查询</Button>
                                        <Button onClick={resetTable}>重置</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col>
                                <Button type='primary' style={{ margin: 8 }} onClick={() => changeModal(true)}>添加名称</Button>
                            </Col>
                        </Row>

                    }
                    dataSource={dataSource}
                    columns={columns}
                    loading={loading}
                    onChange={onChange}
                    bordered
                    rowKey={'id'}
                    size={'small'}
                    scroll={{ x: 700 }}
                    pagination={{
                        showQuickJumper: true,
                        showSizeChanger: true,
                        pageSizeOptions: ["10", "20", "50", "80"],
                        showTotal: (total, range) => `显示${range[0]}到${range[1]}, 共 ${total} 条数据`,
                        ...pageConfig,
                    }}
                />
                <Modal
                    title="叔叔们取得名字一定是最棒的"
                    visible={isModalVisible}
                    centered={true}
                    confirmLoading={modalLoading}
                    destroyOnClose={true}
                    onOk={handleOk}
                    onCancel={() => changeModal(false)}
                >
                    <Spin spinning={modalLoading}>
                        <Form
                            form={form}
                            layout="vertical"
                            name="form-baby-name"
                        >
                            <Form.Item
                                name="name"
                                label="宝宝名称"
                                rules={[
                                    { required: true, whitespace: true, message: '宝宝名称不能为空' },
                                    { pattern: /^谭/, message: '说破天，宝宝也要姓谭' },
                                ]}
                            >
                                <Input maxLength={4} allowClear placeholder='请输入宝宝名称' />
                            </Form.Item>
                            <Form.Item
                                name="addName"
                                label="你到底是谁"
                                rules={[{ required: true, whitespace: true, message: '备注好你的名字哦' }]}
                            >
                                <Select
                                    showSearch
                                    allowClear
                                    placeholder='请选择他的叔叔们'
                                >
                                    <Option value="卢闯">卢闯</Option>
                                    <Option value="李行">李行</Option>
                                    <Option value="马川">马川</Option>
                                    <Option value="大宝">大宝</Option>
                                    <Option value="同同">同同</Option>
                                    <Option value="峰子">峰子</Option>
                                    <Option value="阿梁">阿梁</Option>
                                    <Option value="李威">李威</Option>
                                    <Option value="其他">其他</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Modal>
            </div>
        </Layout>
    )
}

export default Index