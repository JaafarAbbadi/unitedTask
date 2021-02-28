import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BaseState, baseFeatureKey } from './base.reducers';

export const selectBase = createFeatureSelector<BaseState>(baseFeatureKey);
export const settingsSelector = createSelector(selectBase, state => state.settings);
export const defaultCountrySelector = createSelector(selectBase, state => state.defaultCountry);
export const countriesSelector = createSelector(selectBase, state => state.countries);
export const getLocalStorageErrorSelector = createSelector(selectBase, state => state.getLocalStorageError);
export const getSettingsFromServerSelector = createSelector(selectBase, state => state.getSettingsFromServer);
