/*
 * @Author: tan
 * @Date: 2020-09-14 08:38:14
 * @LastEditors: tanwei
 * @LastEditTime: 2020-11-08 19:58:38
 * @Description: global config
 */

const config = {
    title: 'T COLLECTION V1',
};
const servicesPath = '/web';
let servicesUrl = '/'
switch (process.env.NEXT_PUBLIC_DOMAIN_ENV) {
    case 'development':
        servicesUrl = 'http://localhost:7002'
        break;
    case 'production':
        servicesUrl = 'https://api.hellotanwei.cn'
        break;
    default:
        servicesUrl = '/'
}

export {
    config as default,
    servicesPath,
    servicesUrl,
};
