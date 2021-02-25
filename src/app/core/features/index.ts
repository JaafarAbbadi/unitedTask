import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { baseFeatureKey, baseReducer, BaseState } from './base/base.reducers';

export interface AppState {
    router: RouterReducerState;
    [baseFeatureKey]: BaseState;
}
export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    [baseFeatureKey]: baseReducer
};
