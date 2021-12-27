/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2021-03-07 14:46:34
 * @LastEditors: tanwei
 * @LastEditTime: 2021-03-08 15:45:22
 * @FilePath: /open-platform/src/services/api.ts
 */

import request from '@/utils/axios'
import { servicesPath } from '@/config';
const getAllNotesClassification = (data) => {
    return request({
        url: `${servicesPath}/v1/allNotesClassification`,
        method: 'get',
        data,
    });
}
const getArticleList = (data) => {
    return request({
        url: `${servicesPath}/v1/notes/article`,
        method: 'get',
        data,
    });
}


export default {
    getAllNotesClassification,
    getArticleList,
};