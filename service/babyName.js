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
const getBabyTable = (data) => {
    return request({
        url: `${servicesPath}/v1/baby`,
        method: 'get',
        data,
    });
}
const createBaby = (data) => {
    return request({
        url: `${servicesPath}/v1/baby`,
        method: 'post',
        data,
    });
}

const deleteBaby = (id) => {
    return request({
        url: `${servicesPath}/v1/baby/${id}`,
        method: 'delete',
    });
}


export default {
    getBabyTable,
    createBaby,
    deleteBaby,
};