import { types } from 'mobx-state-tree'
import { UserModel } from 'app/models';

export const RootStore = types
  .model('RootStore', {
    user: types.optional(types.maybe(UserModel), null)
  });

export default RootStore;
