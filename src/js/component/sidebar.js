import React from 'react';
import '../../css/sidebar.css';

export default class SideBar extends React.Component {
    render() {
        return(
            <div className="sidebar-container">
                <div className="sidebar-overlay"></div>
                <div className="sidebar-intro">
                    <div className="sidebar-avatar">
                        <a href=''>
                            <img src={require('../../images/author.png')}/>
                        </a>
                    </div>
                    <div className="sidebar-author">eversleeping</div>
                    <div className="sidebar-slogan">逆水行舟,不进则退</div>
                    <div className="sidebar-nav">
                        <ul>
                            <li><a href="/">主页</a></li>
                            <li><a href="/tags/随笔/">随笔</a></li>
                            <li><a href="/photos">相册</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
