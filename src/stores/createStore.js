// @flow

import RootStore from './rootStore'
import RouterStore from './routerStore'
import UserModel from '../models/UserModel'

export type StoresType = {
  rootStore: RootStore,
  routerStore: RouterStore
}

export function createStores(history: History, user: UserModel): StoresType {
  const rootStore: RootStore = RootStore.create({ user }, { user: UserModel })
  const routerStore: RouterStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
