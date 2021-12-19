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
// 处理导出、下载等特殊请求
import { binaryStreamUrl } from '../config/exportAxiosUrl';
import { servicesUrl } from '../config/index';

axios.interceptors.request.use(
    (config) => {
        config.baseURL = servicesUrl
        // 二进制文件流请求更改responseType
        const binaryStreamStatus = binaryStreamUrl.findIndex(val => val === config?.url);
        binaryStreamStatus !== -1 && (config.responseType = 'blob');
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// axios响应拦截器
axios.interceptors.response.use(
    (response) => {
        console.log(response, 'response');
        const { data, headers, config } = response;
        const binaryStreamStatus = binaryStreamUrl.findIndex(val => val === config?.url);
        if (data?.code !== 200 && binaryStreamStatus === -1) {
            message.error(data?.message);
        }
        // 二进制文件流请求更改responseType
        if (binaryStreamStatus !== -1) {
            const contentDisposition = headers['content-disposition'];
            let filename = contentDisposition?.split(";")[1]?.split("filename=")[1];
            filename && (filename = decodeURIComponent(filename, "UTF-8"));
            const resData = {
                filename,
                data,
            };
            return resData;
        }
        return data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;

