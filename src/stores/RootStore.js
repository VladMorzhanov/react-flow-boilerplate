// @flow

import { types, Type } from 'mobx-state-tree'
import UserModel from '../models/UserModel'

const RootStore: Type = types.model('RootStore', {
  user: types.optional(types.maybe(UserModel), null)
})

export default RootStore
