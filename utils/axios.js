import axios from '@/utils/axiosInterceptors'

/**
 * 统一处理axios提交请求
 */
const request = async ({ method = `get`, url = `/`, data = {}, ...restProps }) => {
    if (typeof method !== "string") {
        method = `get`;
    }
    if (typeof url !== "string") {
        url = `/`;
    }
    console.log(method, 'method');
    console.log(url, 'url');
    console.log(data, 'data');
    const res = await axios({
        method,
        url,
        [method === `get` ? "params" : "data"]: data,
        ...restProps
    })
    return res
}


export default request