import React from 'react';
import {Link} from 'react-router-dom'
import '../../css/blogIntro.css';


export default class BlogIntro extends React.Component {
    constructor() {
        super();
        this.state = {
            article:[],
        }
    }

    componentDidMount() {
        this.setState({
            article:[1,2,3,4,5,6]
        },() => {
            console.log(this.state.article);
        });
    }
    render() {
        var article = this.state.article
        return (
            <div className='content-container'>
                {
                    article.map((index) => {
                        return(
                            <div className="content-article" key={index}>
                                <div className="article-header">
                                    <h1>深入理解react</h1>
                                    <a>2017-7-17</a>
                                </div>
                                <div className="article-entry">
                                    <p>目前mac下安装node环境有点麻烦，折腾了一段时间，终于安装成功，下面是一些记录，方便有同样需要的人<br/>
                                    <a className="article-more-a" href="#BlogDetail">more &gt;&gt;</a>
                                    </p>
                                </div>
                                <div className='article-intro'>

                                </div>
                            </div>
                        )
                    })
                }

                <Link to="/write"><div className="write-icon"></div></Link>
            </div>
        )
    }
}
