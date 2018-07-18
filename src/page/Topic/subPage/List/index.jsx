import React from 'react'
import './style.scss'
import TopList from 'component/TopList'
import getTopicList from 'api/getTopicList'

class List extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
        this.state = {
            tab: [{
                name: '全部',
                id: ''
            }, {
                name: '精华',
                id: 'good'
            }, {
                name: '分享',
                id: 'share'
            }, {
                name: '问答',
                id: 'ask'
            }],
            curTabIndex: 0,
            list: [],
            curPage:1
        }
    }
    render() {
        return (
            <div id="list">
                <ul className="tab">
                    {this.state.tab.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={this.switchTab.bind(this, item.id,index)}
                                className={index === this.state.curTabIndex ? 'active' : ''}>
                                <span>{item.name}</span>
                            </li>
                        )
                    })}
                </ul>
                <TopList data={this.state.list} />
            </div>
        )
    }

    switchTab(tabId,index) {
        this.setState({
            curTabIndex: index
        })
        this.getTopicList(tabId)
    }

    getTopicList(tabId) {
        let params = {
            tab:tabId
        }
        getTopicList(params).then((res) => {
            let data = res.data.data
            this.setState({
                list: data
            })
        })
    }

    componentDidMount() {
        this.getTopicList()
    }
}

export default List