/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2021-01-30 15:18:17
 * @LastEditors: tanwei
 * @LastEditTime: 2021-03-08 15:21:20
 * @FilePath: /open-platform/src/config/axios.ts
 */
import axios from 'axios';
import { message } from 'antd'
import { servicesUrl } from '../config/index';

axios.interceptors.request.use(
    (config) => {
        config.baseURL = servicesUrl
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// axios响应拦截器
axios.interceptors.response.use(
    (response) => {
        const { data, headers, config } = response;
        if (data?.code !== 200) {
            message.error(data?.message);
        }
        return data;
    },
    (error) => {
        console.log(error, 'error');
        return Promise.reject(error);
    }
);

export default axios;

