import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import data from './data'
import { Cascader } from 'antd'

const AllTechnique = props => {
    const ref = useRef(null)
    const container = ref.current;
    const width = container?.scrollWidth;
    const height = container?.scrollHeight;
    let graph = null
    // 注册节点
    const initRegisterNode = () => G6.registerNode(
        'tree-node',
        {
            drawShape: function drawShape(cfg, group) {
                const rect = group.addShape('rect', {
                    attrs: {
                        fill: '#5cdbd3',
                        stroke: '#87e8de',
                        x: 0,
                        y: 0,
                        width: 1,
                        height: 1
                    },
                    name: 'rect-shape',
                });
                const content = cfg.name.replace(/(.{19})/g, '$1\n');
                const text = group.addShape('text', {
                    attrs: {
                        text: content,
                        x: 0,
                        y: 0,
                        textAlign: 'left',
                        textBaseline: 'middle',
                        fill: '#fff',
                    },
                    name: 'text-shape',
                });
                const bbox = text.getBBox();
                const hasChildren = cfg.children && cfg.children.length > 0;
                rect.attr({
                    x: -bbox.width / 2 - 4,
                    y: -bbox.height / 2 - 6,
                    width: bbox.width + (hasChildren ? 26 : 12),
                    height: bbox.height + 12,
                });
                text.attr({
                    x: -bbox.width / 2,
                    y: 0
                })
                if (hasChildren) {
                    group.addShape('marker', {
                        attrs: {
                            x: bbox.width / 2 + 12,
                            y: 0,
                            r: 6,
                            symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
                            stroke: '#fff',
                            lineWidth: 2,
                        },
                        name: 'collapse-icon',
                    });
                }
                return rect;
            },
            update: (cfg, item) => {
                const group = item.getContainer();
                const icon = group.find((e) => e.get('name') === 'collapse-icon');
                icon.attr('symbol', cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse);
            },
        },
        'single-node',
    );

    // TreeGraph画布
    const initTreeGraph = (props) => {
        const graph = new G6.TreeGraph({
            container: ref.current,
            ...props,
            modes: {
                default: [
                    {
                        type: 'collapse-expand',
                        onChange: function onChange(item, collapsed) {
                            const data = item.get('model');
                            graph.updateItem(item, {
                                collapsed,
                            });
                            data.collapsed = collapsed;
                            return true;
                        },
                    },
                    'drag-canvas',
                    'zoom-canvas',
                ],
            },
            defaultNode: {
                type: 'tree-node',
                anchorPoints: [
                    [0, 0.5],
                    [1, 0.5],
                ],
            },
            defaultEdge: {
                type: 'cubic-horizontal',
                style: {
                    stroke: '#A3B1BF',
                },
            },
            layout: {
                type: 'compactBox',
                direction: 'LR',
                getId: function getId(d) {
                    return d.id;
                },
                getHeight: function getHeight() {
                    return 16;
                },
                getWidth: function getWidth() {
                    return 16;
                },
                getVGap: function getVGap() {
                    return 20;
                },
                getHGap: function getHGap() {
                    return 80;
                },
            },
        });
        return graph
    }

    // 渲染
    const renderGraph = (graphData) => {
        graph.data(graphData || []);
        graph.render();
        graph.fitView();
    }

    useEffect(() => {
        console.log(11111);

        if (!graph) {
            initRegisterNode()
            const minimap = new G6.Minimap({
                size: [120, 120]
            });
            graph = initTreeGraph({ width, height, plugins: [minimap] })
        }
        renderGraph(data)

        return () => {
            console.log(122222);
            graph.destroy();
        }
    }, [])

    const onChange = (value, selectedOptions) => {
        const graphData = selectedOptions?.length > 0 ? selectedOptions[selectedOptions.length - 1] : data;
        renderGraph(graphData)
    }
    if (typeof window !== 'undefined') {
        window.onresize = () => {
            if (!graph || graph.get('destroyed')) return;
            if (!container || !container.scrollWidth || !container.scrollHeight) return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
    }
    return (
        <div style={{ paddingTop: 22, width: '100%', height: '100%' }}>
            <Cascader
                options={data?.children || []}
                style={{ width: '100%' }}
                onChange={onChange}
                fieldNames={{ label: 'name', value: 'name' }}
                placeholder="筛选你想看的技术栈"
                changeOnSelect={true}
            />
            <div style={{ width: '95%', height: '95%', marginTop: 20 }} ref={ref} ></div>
        </div>
    )
}


export default AllTechnique
