import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { indigoA200 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './reducers'
import AppContainer from './containers/appContainer'
import LoginContainer from './containers/loginContainer'
import RegisterContainer from './containers/registerContainer'
import ResetPasswordContainer from './containers/resetPasswordContainer'

import registerServiceWorker from './registerServiceWorker'
import './css/index.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA200,
    primary2Color: indigoA200,
  },
})

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/resetpassword" component={ResetPasswordContainer} />
            <Route path="/" component={AppContainer} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
