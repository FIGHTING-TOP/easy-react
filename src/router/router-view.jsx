import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActions from 'store/actions/userInfo'

import Footer from 'component/Footer'

class RouterView extends React.PureComponent{
    constructor(props,context){
        super(props,context)
    }
    render (){
        return (
            <div className="root">
                {/* 此处渲染路由 */}
                {
                    this.props.children
                }
                <Footer/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {}
}
function mapDispatchToProps(dispathch){
    return {
        userInfoActions:bindActionCreators(userInfoActions,dispathch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterView)

//路由视图组件