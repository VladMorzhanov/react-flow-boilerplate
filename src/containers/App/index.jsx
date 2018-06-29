import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Router, Switch } from 'react-router'
import { Main } from '../Home'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const App = hot(module)(({ history }) => (
  <Container>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Container>
))
