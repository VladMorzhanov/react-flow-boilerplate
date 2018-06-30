// @flow

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { createStores, StoresType } from './stores/createStore'
import App from './containers/App'
import UserModel from './models/UserModel'
import './assets/styles/main.scss'

const history: History = createBrowserHistory()
const defautlUser: UserModel = UserModel.create({ name: 'Default Name' })
const stores: StoresType = createStores(history, defautlUser)

const root: React.Element<*> = (
  <Provider {...stores}>
    <App history={history} />
  </Provider>
)

ReactDOM.render(root, document.getElementById('app'))
