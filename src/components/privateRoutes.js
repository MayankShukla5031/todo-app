import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TodoListContainer from '../containers/todoListContainer'
import TodoAddEditContainer from '../containers/todoAddEditContainer'
import TodoSummaryContainer from '../containers/todoSummaryContainer'


const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/todoList" component={TodoListContainer} />
    <Route exact path="/todo/:operation/:id?" component={TodoAddEditContainer} />
    <Route component={TodoSummaryContainer} />
  </Switch>
)

export default PrivateRoutes
