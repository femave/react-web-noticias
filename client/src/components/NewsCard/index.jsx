'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'
import style from './style.scss'

const NewsCard = ({ news }) => {
  
  return (
    <div className={style.bgHome}>
      {news.map(news => {
        return(
          <Link to={{
            pathname: `/news/${news.link}`,
            state: { news }
          }}>         
          <div className={style.bgNews} key={uuid.v4()}>
            <img src={news.src} alt={news.name} />
          </div>
          </Link>
        )
      })}
    </div>
  )
}




export default NewsCard