import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from './components/Title'
import { Top } from './components/Top'
import { Footer } from './components/Footer'

// 引入垫片兼容IE
require('es5-shim');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
// 居然没有引用antd的样式文件
import 'animate.css/animate.min.css';
import './less/main.less';

// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              {/* { Title({ETC: '500',ETH: '500',ETP: '500'}) } */}
              {/* { Top() } */}
              {this.props.children}
              {/* { Footer() } */}
            </div>
        )
    }
}
