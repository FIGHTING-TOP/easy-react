import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from 'store/actions/userInfo'
import './index.scss'

class Index extends React.PureComponent{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="index">
                <button onClick={this.changeUserInfo.bind(this)}>
                    更改用户信息
                </button>
                <div className="userInfo">
                    {this.props.userInfo.userId}
                    {this.props.userInfo.city}
                </div>
            </div>
        )
    }

    changeUserInfo(){
        this.props.userInfoActions.login({
            userId:'张三',
            city:'北京'
        })
    }
    componentDidMount(){
        this.props.userInfoActions.login({
            userId:'chaipeng',
            city:'北京'
        })
    }

}

function mapStateToProps(state){
    return {
        userInfo:state.userInfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)