import React from 'react'
import SideBar from '../component/sidebar.js';
import BlogIntro from '../component/blogIntro.js';
import style from '../../css/App.css';


export default class Home extends React.Component {
    render() {
        return (
            <div className="blog-container">
                <SideBar />
                <div className="blog-content">
                    <BlogIntro />
                </div>
            </div>            
        )
    }
}
