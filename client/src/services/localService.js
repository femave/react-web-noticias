'use strict';

import axios from 'axios'

export default {
  dataNames: () => {
    const URL = `http://localhost:3001/api/newsData/`
    return axios.get(URL)

      .then(res => {
        const news = res.data.names
        // console.log(news)
        const setNews = news.map(data => {
          return{
            id: data.id,
            name: data.name,
            link: data.link,
            src: data.src
          }
        })
        return setNews
      })
  }

}