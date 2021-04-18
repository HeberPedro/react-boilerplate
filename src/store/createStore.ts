import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';
import { PersistState } from 'redux-persist';

export interface StoreState {
    _persist: PersistState;
    auth: AuthState;
}

export type StoreAction = AuthAction;

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
};
