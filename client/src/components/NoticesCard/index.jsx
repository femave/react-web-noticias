'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import uuid from 'uuid'
import style from './style.scss'

const NoticesCard = ({ notices }) => {
  
  if(notices.length > 1){
    return (
      <div className={style.bgNewsPage}>
        {notices.map(notices => {
          return(               
            <div className={style.bgNews} key={uuid.v4()}>
              <a href={notices.href[0]}><h3>{ notices.title }</h3></a>
              <img src={notices.imgSrc} alt={uuid.v4()}/>
            </div>
          )
        })}
      </div>
    )
  }else{
    return (
      <div>
        <p>Buscando noticias...</p>
      </div>
    )
  }
}




export default NoticesCard