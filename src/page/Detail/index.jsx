import React from 'react'
import './style.scss'

import Header from 'component/Header'

class Detail extends React.PureComponent{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div id="Detail">
               <Header/>
            </div>
        )
    }
}

export default Detail
