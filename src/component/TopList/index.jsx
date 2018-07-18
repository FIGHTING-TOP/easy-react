import React from 'react'
import './style.scss'

class TopList extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <ul id="topList">
                {this.props.data.map((item, index) => {
                    return (
                        <li className="item" key={index}>
                            <h3 className="title">{item.title}</h3>
                            <p className="des" dangerouslySetInnerHTML={{__html:this.subContent(item.content)}}>
                            </p>
                            <div className="num">
                                <span className="anthor">
                                    <img src={item.author.avatar_url} width="20"/>
                                    {item.author.loginname}
                                </span>
                                <span className="look">
                                    <i className="iconfont icon-look"></i>
                                    {item.visit_count}
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
    subContent(content){
        return content.substring(0,148) + '...'
    }
}

export default TopList