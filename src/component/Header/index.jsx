import React from 'react'
import './style.scss'

class Header extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div id="header">
                <span className="iconfont icon-sandian"></span>
                <span className="iconfont icon-sousuo"></span>
            </div>
        )
    }
}

export default Header