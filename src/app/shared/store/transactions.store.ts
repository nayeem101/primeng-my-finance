import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  addEntities,
  addEntity,
  removeEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { user1 } from '../models/user.data';
import { AccountTransaction } from '../models/user.model';

export const TransactionStore = signalStore(
  withEntities<AccountTransaction>(),
  withMethods((store) => ({
    addTransaction(entity: AccountTransaction) {
      console.log(entity);
      patchState(store, addEntity(entity));
    },
    removeTransaction(id: number) {
      patchState(store, removeEntity(id));
    },
  })),
  withHooks({
    onInit(store) {
      //initial transactions
      patchState(store, addEntities(user1.manager.transactions));
    },
  })
);
