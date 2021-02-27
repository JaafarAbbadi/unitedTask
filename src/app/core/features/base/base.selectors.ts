import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BaseState, baseFeatureKey } from './base.reducers';

export const selectBase = createFeatureSelector<BaseState>(baseFeatureKey);
export const selectInitData = createSelector(selectBase, state => state.data);
