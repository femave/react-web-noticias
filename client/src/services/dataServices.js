import axios from 'axios'

export default {
  getData: () => {
    const URL = `http://localhost:3001`
    return axios.get(URL)

    .then(res => {
      const users = res.data
      const usersMap = users.map(user => {
        return { 
          users: user.username,
          id: user.id          
        }
      })

      return users
    })
  }

}