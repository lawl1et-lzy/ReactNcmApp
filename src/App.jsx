import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import router from '@/router/index'
class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Router>
        <Switch>
        {
          // 遍历出配置项
          router.map(({path, exact = false, component, name}, index) => {
            return <Route
                path={path}
                name={name}
                key={index}
                exact={exact}
                component={component}
                // render = {(props) => <Component name={name} {...props}/>}
              />
          })
        }
        </Switch>
      </Router>
      // <Router routes={router} />
    )
  }
}

export default App;
