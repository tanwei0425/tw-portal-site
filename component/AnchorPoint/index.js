/*
 * @Descripttion: 
 * @Author: tanwei
 * @Date: 2020-10-18 19:05:27
 * @LastEditors: tanwei
 * @LastEditTime: 2020-10-19 09:30:05
 * @FilePath: /jianli/web-index/component/AnchorPoint/index.js
 */
import React from 'react';
import Link from 'rc-scroll-anim/lib/ScrollLink';

export default function AnchorPoint(props) {
  const { data, size, position, type, stroke } = props;
  const children = data.map((item) => {
    if (item.match('nav') || item.match('footer')) {
      return null;
    }
    const className = `point ${type} ${stroke} ${size}`.trim();
    return (
      <Link
        key={item}
        className={className}
        to={item}
        toHash={false}
      />
    );
  }).filter((item) => item);
  const wrapperClass = `point-wrapper ${position} ${size}`.trim();
  return (
    <div
      className={wrapperClass}
    >
      <div>
        {children}
      </div>
    </div>
  );
}

AnchorPoint.defaultProps = {
  size: '',
  position: '',
  type: '',
  stroke: '',
};
