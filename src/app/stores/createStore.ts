import {History} from 'history';
import {RootStore} from './RootStore';
import {RouterStore} from './RouterStore';


export function createStores(history: History) {
  const rootStore = RootStore.create();
  const routerStore = new RouterStore(history);
  return {
    rootStore,
    routerStore
  };
}
