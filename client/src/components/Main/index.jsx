'use strict';

import React, { Component } from 'react'
import style from './style.scss'
import NewsCard from '../NewsCard'

class Main extends Component {
    constructor () {
      super()
      this.state = {
        title: 'Prensa'
      }
    }
    
    render() {
      return (
        <div className={style.bgHome}>
          <h1>{this.state.title}</h1>
          <NewsCard/>
        </div>
      );
    }
  }
  
  export default Main;