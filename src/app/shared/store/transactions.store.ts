import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  addEntities,
  addEntity,
  removeEntity,
  updateEntity,
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
    updateTransaction(entity: AccountTransaction) {
      console.log(entity);
      patchState(store, updateEntity({ id: entity.id, changes: entity }));
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
