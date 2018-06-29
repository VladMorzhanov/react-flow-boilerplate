// @flow

import { RootStore } from './RootStore'
import { RouterStore } from './RouterStore'

export function createStores(history, user) {
  const rootStore = RootStore.create({ user: user })
  const routerStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
