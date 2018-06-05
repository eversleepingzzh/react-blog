import React from 'react';

import SideBar from './component/sidebar.js';
import BlogIntro from './component/blogIntro.js';
import BlogDetail from './component/blogDetail.js';

import style from '../css/App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route:window.location.hash
        }
    }

    componentDidMount() {
        var self = this;

        setTimeout(() => {
            window.addEventListener('hashchange',function() {
                var route = window.location.hash.substr(1)
                self.setState({
                    route:route
                })
            })
        },0);

        console.log(this.state.route)
    }
    render () {
        var Child;
        switch (this.state.route) {
            case '':
                Child = BlogIntro;
                break;
            case 'BlogDetail':
                Child = BlogDetail;
                break;
            case 'BlogWrie':
                Child = BlogWrite;
                break;
            default:
                Child = null;
        }
        return (
            <div className="blog-container">
                <SideBar />
                <div className="blog-content">
                    <Child />
                </div>
            </div>
        )
    }
}
