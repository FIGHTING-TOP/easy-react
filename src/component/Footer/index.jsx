import React from 'react'
import './style.scss'
import { Link } from 'react-router'
class Header extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
        this.state = {
            tabInfo: [{
                tabName: 'Topic',
                classInfo: 'iconfont icon-popular'
            }, {
                tabName: 'Favorite',
                classInfo: 'iconfont icon-favorite'
            }, {
                tabName: 'My',
                classInfo: 'iconfont icon-my'
            }],
            curTabIndex: 0
        }
    }
    render() {
        return (
            <ul id="footer">
                {this.state.tabInfo.map((item, index) => {
                    return (
                        <li key={index}
                            onClick={this.tabSwitch.bind(this, index)}
                            className={index === this.state.curTabIndex ? 'active' : ''}>
                            <Link to={'/' + item.tabName} >
                                <span><i className={item.classInfo}></i></span>
                                <span>{item.tabName}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }

    tabSwitch(index) {
        this.setState({
            curTabIndex: index
        })
    }
}

export default Header