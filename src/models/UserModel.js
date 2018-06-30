// @flow

import { types, Type } from 'mobx-state-tree'

const UserModel: Type = types.model('UserModel', {
  name: types.maybe(types.string)
})

export default UserModel
