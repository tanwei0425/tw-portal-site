/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 19:20:59
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-18 19:24:22
 * @FilePath: /jianli/web-index/utils/index.js
 */

import React from 'react';
import { Button } from 'antd';

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return {type} 
 */
export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {type} 
 * @return {type} 
 */
export const getChildrenToRender = (item, i) => {
    let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
    tag = item.href ? 'a' : tag;
    let children = typeof item.children === 'string' && item.children.match(isImg)
        ? React.createElement('img', { src: item.children, alt: 'img' })
        : item.children;
    if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
        children = React.createElement(Button, {
            ...item.children
        });
    }
    return React.createElement(tag, { key: i.toString(), ...item }, children);
};
