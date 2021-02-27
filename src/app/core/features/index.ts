import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { baseFeatureKey, baseReducer, BaseState } from './base/base.reducers';
import { menuFeatureKey, menuReducer, MenuState } from './menu/menu.reducers';

export interface AppState {
    router: RouterReducerState;
    [baseFeatureKey]: BaseState;
    [menuFeatureKey]: MenuState;
}
export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    [baseFeatureKey]: baseReducer,
    [menuFeatureKey]: menuReducer
};
