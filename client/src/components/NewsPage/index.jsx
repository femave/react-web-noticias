'use strict';

import React, { Component } from 'react'
import services from '../../services/dataServices'
import style from './style.scss'
import NoticesCard from '../NoticesCard'

class NewsPage extends Component {

    constructor() {
        super()
        this.state = {
            title: 'Noticias',
            notices: ['']
        }
    }

    componentDidMount(){
        const { newsPaper } = this.props.match.params
        services.getInfo(newsPaper)
        .then(res =>{
            const notices = res.newsData
            this.setState({ notices })
        })

    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>{this.state.title}</h1>
                <NoticesCard notices={this.state.notices} />
            </div>
        )
    }


}



export default NewsPage