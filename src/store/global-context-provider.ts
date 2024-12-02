import { types, type Instance } from 'mobx-state-tree';
import React from 'react';

const StoreContextModel = types.model({});

export const storeContextStore = StoreContextModel.create({});

export type StoreContextInstanceType = Instance<typeof StoreContextModel>;
export const StoreContext =
  React.createContext<null | StoreContextInstanceType>(null);

export function useContextStore(): StoreContextInstanceType {
  const store = React.useContext(StoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
