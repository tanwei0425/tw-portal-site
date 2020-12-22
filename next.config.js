/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-17 22:27:47
 * @LastEditors: tanwei
 * @LastEditTime: 2020-12-13 20:13:26
 * @FilePath: /jianli/web-index/next.config.js
 */
const fs = require('fs');
const path = require('path');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './styles/antd.less'), 'utf8')
);

const webpackConfig = {
    devIndicators: {
        // 静态优化指标
        autoPrerender: false,
    },
    // exportTrailingSlash:true,
    webpack: (config, { isServer }) => {
        // 解决ant less引入问题
        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        // 过滤mini-css-extract-plugin 顺序问题的警告
        config.plugins.push(new FilterWarningsPlugin({ exclude: /mini-css-extract-plugin[^]*Conflicting order between:/, }))
        return config;
    }
}
const lessOptions = {
    cssLoaderOptions: {
        importLoaders: 3,
        localIdentName: '[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
        importLoaders: 0,
    },
    ...webpackConfig
};

module.exports = withCss({
    // cssModules: true, //开启后，正常css失效，包括node_modules
    ...withLess(lessOptions)
})
