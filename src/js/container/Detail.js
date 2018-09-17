import React from 'react'
import SideBar from '../component/sidebar.js';
import BlogDetail from '../component/blogDetail.js';
import style from '../../css/App.css';


export default class Detail extends React.Component {
    render() {
        return (
            <div className="blog-container">
                <SideBar />
                <div className="blog-content">
                    <BlogDetail />
                </div>
            </div>            
        )
    }
}