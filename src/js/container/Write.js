import React from 'react'
import SideBar from '../component/sidebar.js';
import BlogWrite from '../component/blogWrite.js';
import style from '../../css/App.css';


export default class Write extends React.Component {
    render() {
        return (
            <div className="blog-container">
                <SideBar />
                <div className="blog-content">
                    <BlogWrite />
                </div>
            </div>            
        )
    }
}