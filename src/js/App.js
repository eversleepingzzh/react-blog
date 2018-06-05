import React from 'react';

import SideBar from './component/sidebar.js';
import BlogIntro from './component/blogIntro.js';
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
                },() => {
                    console.log(self.state.route);
                })
            })
        },0)
    }
    render () {
        var child;
        switch (this.state.route) {
            case '':
                Child = BlogIntro;
                break;
            case 'Add':
                Child = Add;
                break;
            case 'MineLostlist':
                Child = MineLostlist;
                break;
            default:
                Child = null;
        }
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
