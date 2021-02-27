import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState, menuFeatureKey } from './menu.reducers';

export const selectMenu = createFeatureSelector<MenuState>(menuFeatureKey);
export const selectProductCountry = createSelector(selectMenu, state => state.countryProducts);
