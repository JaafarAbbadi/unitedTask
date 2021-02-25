import { createReducer, on, Action } from '@ngrx/store';
import { Init } from '../../models/init.model';
import * as actions from './base.actions';

export const baseFeatureKey = 'base';

export interface BaseState {
    data?: Init;
    initFailError?: any;
}

export const initialBaseState: BaseState = {
};

const reducer = createReducer(
    initialBaseState,
    on(
        actions.initSuccess,
        (state, { data }) => ({ ...state, data })
    ),
    on(
        actions.initFail,
        (state, { initFailError }) => ({ ...state, initFailError })
    ),
);
export function baseReducer(state: BaseState | undefined, action: Action) {
    return reducer(state, action);
}
