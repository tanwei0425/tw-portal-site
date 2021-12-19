import React, { PureComponent } from 'react';
import Router from 'next/router'
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import classnames from 'classnames'
import { getChildrenToRender } from '@/utils';
import { ColorChangeLogo } from '@/component/Logo'
import config from '@/config'
const { Item, SubMenu } = Menu;

class Nav extends PureComponent {
    constructor(props) {
        super(props);
        this.linkTypeMenu = []
        this.state = {
            phoneOpen: undefined,
            current: undefined,
            headerStatus: true,
        };
    }

    phoneClick = () => {
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
        });
    };
    componentDidMount() {
        this.setState({ current: Router?.router?.pathname })
    }

    handleClick = (e) => {
        const link = e?.key
        const typeLink = e?.item?.props?.typelink
        if (typeLink === 'href') return;
        this.setState({ current: link })
        Router.push(link)
    }

    hideHeaderChange = (status) => {
        this.setState({
            headerStatus: status
        })
    }

    render() {
        const { dataSource, isMobile, autoHideHeader, fixedHeader, ...props } = this.props;
        const { phoneOpen, current, headerStatus } = this.state;
        const navData = dataSource.Menu.children;
        const navChildren = navData.map((item) => {
            const { children: a, subItem, ...itemProps } = item;
            if (subItem) {
                return (
                    <SubMenu
                        key={item.name}
                        {...itemProps}
                        title={
                            <div
                                {...a}
                                className={`header0-item-block ${a.className}`.trim()}
                            >
                                {a.children.map(getChildrenToRender)}
                            </div>
                        }
                        popupClassName="header0-item-child"
                    >
                        {subItem.map(($item, ii) => {
                            const { children: childItem } = $item;
                            let { children: tChildren, ...attr } = childItem
                            // 手机端不要描述
                            isMobile && (tChildren = childItem?.children.filter(val => val.name !== 'content'))
                            return (
                                <Item key={$item.name || ii.toString()} {...$item}>
                                    <a {...attr} >
                                        {tChildren.map(getChildrenToRender)}
                                    </a>
                                </Item>
                            );
                        })}
                    </SubMenu>
                );
            }
            return (
                <Item key={item.name} {...itemProps}>
                    <a {...a} className={`header0-item-block ${a.className}`.trim()}>
                        {a.children.map(getChildrenToRender)}
                    </a>
                </Item>
            );
        });
        const moment = phoneOpen === undefined ? 300 : null;

        const headerNavClass = classnames(
            'header0 header-page-wrapper kgdvgox2cx-editor_css',
            fixedHeader && !isMobile && 'header0Fixed',
            (!headerStatus || !autoHideHeader) && !isMobile && 'header0FixedHover',
        )
        const menuClass = classnames(
            isMobile ? 'header0-menu-navMobile' : 'header0-menu-nav'
        )
        return (
            <TweenOne
                onMouseOver={this.hideHeaderChange.bind(this, false)}
                onMouseOut={this.hideHeaderChange.bind(this, true)}
                component="header"
                animation={{ type: 'from' }}
                className={headerNavClass}
                {...props}
            >
                <div
                    {...dataSource.page}
                    className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                >
                    <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        className={'header0-logo'}
                    >
                        <ColorChangeLogo className={'header0-logo-img'} onClick={() => Router.push('/')} />
                    </TweenOne>
                    {!isMobile && <span className={'header0-title'} >{config?.title}</span>}
                    {isMobile && (
                        <div
                            {...dataSource.mobileMenu}
                            onClick={() => {
                                this.phoneClick();
                            }}
                        >
                            <em />
                            <em />
                            <em />
                        </div>
                    )}
                    <TweenOne
                        {...dataSource.Menu}
                        animation={
                            isMobile
                                ? {
                                    height: 0,
                                    duration: 300,
                                    onComplete: (e) => {
                                        if (this.state.phoneOpen) {
                                            e.target.style.height = 'auto';
                                        }
                                    },
                                    ease: 'easeInOutQuad',
                                }
                                : null
                        }
                        moment={moment}
                        reverse={!!phoneOpen}
                    >
                        <Menu
                            className={menuClass}
                            onClick={this.handleClick}
                            selectedKeys={[current]}
                            mode={isMobile ? 'inline' : 'horizontal'}
                            theme="dark"
                        >
                            {navChildren}
                        </Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        );
    }
}

export default Nav;
