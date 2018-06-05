import React from 'react';

import SideBar from './component/sidebar.js'
import style from '../css/App.css';

export default class App extends React.Component {
    render () {
        return (
            <div className="blog-container">
                <SideBar />
            </div>
        )
    }
}
