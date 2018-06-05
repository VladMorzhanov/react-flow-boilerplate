import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {createBrowserHistory} from 'history';
import {createStores} from './stores';
import {App} from './containers/App';
import UserModel from "./models/UserModel";

// prepare MobX stores
const history = createBrowserHistory();
const defautlUser = UserModel.create({name: 'Default Name'});
const stores = createStores(history, defautlUser);

// render react DOM
ReactDOM.render(
  <Provider {...stores}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
