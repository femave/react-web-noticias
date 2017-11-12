import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Main from '../components/Main'
import NewsPage from '../components/NewsPage'


// import styles from './routes.scss'

const Routes = () => {
  return (
    <Router>
        <div>
          {/* <Nav /> */}
          {/* <Switch> */}
            <Route exact path='/' component={Main} />
            {/* <Route path='/forecast' component={Forecast} /> */}
            <Route path='/news/:newsPaper' component={NewsPage} />
            {/* <Route render={() => <p>Not Found</p>} /> */}
          {/* </Switch> */}
        </div>
      </Router>
  )
}

export default Routes