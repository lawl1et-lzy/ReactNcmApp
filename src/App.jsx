import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import router from '@/router/index'
class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Router>
        {
          // 遍历出配置项
          router.map(({path, exact = false, component}, index) => {
            return <Route
                path={path}
                key={index}
                exact={exact}
                component={component}
              />
          })
        }
      </Router>
    )
  }
}

export default App;
