import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'common/scss/reset.css'
import 'common/scss/font.css'

//初始化redux
import storeInit from './store'
const store = storeInit()

//引入路由
import RouterMap from 'router/router-map'
render(
    <Provider store={store}>
       <RouterMap/>
    </Provider>,
    document.getElementById('app')
)

//应用的入口页面,负责挂载组件到DOM


