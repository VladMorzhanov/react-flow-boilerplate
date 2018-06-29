// @flow

import { RootStore } from './RootStore'
import { RouterStore } from './RouterStore'
import UserModel from '../models/UserModel'

export function createStores(history: History, user: UserModel) {
  const rootStore = RootStore.create({ user: user })
  const routerStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
