import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { addEntities, addEntity, withEntities } from '@ngrx/signals/entities';
import { user1 } from '../models/user.data';
import { AccountTransaction, Transaction } from '../models/user.model';

export const TransactionStore = signalStore(
  withEntities<AccountTransaction>(),
  withMethods((store) => {
    return {
      addTransaction(entity: AccountTransaction) {
        console.log(entity);
        patchState(store, addEntity(entity));
      },
    };
  }),
  withHooks({
    onInit(store) {
      //initial transactions
      patchState(store, addEntities(user1.manager.transactions));
    },
  })
);
