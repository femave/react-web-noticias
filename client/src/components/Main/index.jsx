'use strict';

import React, { Component } from 'react'
import style from './style.scss'
import services from '../../services/localService'
import NewsCard from '../NewsCard'

class Main extends Component {
    constructor () {
      super()
      this.state = {
        title: 'Prensa',
        news: ['']
      }
    }

    componentDidMount() {
      services.dataNames()
        .then(news => {
          this.setState({ news }) 
        })

    }
    
    render() {
      return (
        <div className={style.bgHome}>
          <h1>{this.state.title}</h1>
          <NewsCard news={this.state.news}/>
        </div>
      );
    }
  }
  
  export default Main;