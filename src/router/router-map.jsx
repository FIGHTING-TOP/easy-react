import React from 'react'
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import RouterView from './router-view'
import Topic from 'page/Topic'
import Favorite from 'page/Favorite'
import My from 'page/My'
import Detail from 'page/Detail'

class RouterMap extends React.PureComponent{
    render(){
        return (
            <Router history={hashHistory} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={RouterView}>
                    {/* 此处定义路由 */}
                    <IndexRoute component={Topic}/>
                    <Route path='/Topic' component={Topic}/>
                    <Route path='/Favorite' component={Favorite}/>
                    <Route path='/My' component={My}/>
                    <Detail path='/Detail' component={Detail}/>
                </Route>
            </Router>
        )
    }

    updateHandle(){
        console.log('路由更新了')
        //统计Pv
    }
}

export default RouterMap

//搭建应用组件路由结构
