import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Router, Switch } from 'react-router'
import styled from 'styled-components'
import Home from '../Home'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const App = hot(module)(({ history }) => (
  <Container>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Container>
))
