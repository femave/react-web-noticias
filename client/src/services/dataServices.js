'use strict';

import axios from 'axios'

export default {

  getInfo: (newsPage) => {
    const data = { newsPage }
    const url = `http://localhost:3001/api/${newsPage}`
    return axios.post(url, data)

    .then(res => {
      return res.data
      })

  }

}