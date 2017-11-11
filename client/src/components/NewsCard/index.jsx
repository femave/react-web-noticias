'use strict';

import React, { Component } from 'react'
import style from './style.scss'
import services from '../../services/localService'

class NewsCard extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  componentDidMount () {
    services.dataNames()
    .then(data => {
      console.log(data)
    })
  }
  render () {
    return (
      <div className={style.bgNews}>
          
          
      </div>
    )
  }
}

export default NewsCard