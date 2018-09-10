import * as React from 'react'
import { Provider } from 'mobx-react'
import styled from 'styled-components'
import { createBrowserHistory } from 'history'
import { createStores } from '../../stores/createStore'
import UserModel from '../../models/UserModel'
import Router from '../../router/router'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = (): React.Element<*> => (
  <Provider {...stores}>
    <Container>
      <Router history={history} />
    </Container>
  </Provider>
)

export default App
