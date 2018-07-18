import React from 'react'
import './style.scss'

import Header from 'component/Header'
import List from './subPage/List'


class Home extends React.PureComponent{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="home">
               <Header/>
               <List/>
            </div>
        )
    }
}

export default Home
