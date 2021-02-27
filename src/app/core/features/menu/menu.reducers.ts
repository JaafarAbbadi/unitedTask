import { createReducer, on, Action } from '@ngrx/store';
import { CountryProducts } from '../../models/country-products.model';

import * as actions from './menu.actions';

export const menuFeatureKey = 'menu';
export interface MenuState {
    countryProducts?: CountryProducts;
    loadCountryProductsError?: any;
}
export const initialMenuState: MenuState = {};

const reducer = createReducer(
    initialMenuState,
    on(
        actions.loadCountryProductsSuccess,
        (state, { countryProducts }) => ({ ...state, countryProducts })
    ),
    on(
        actions.loadCountryProductsFail,
        (state, { loadCountryProductsError }) => ({ ...state, loadCountryProductsError })
    ),
);
export function menuReducer(state: MenuState | undefined, action: Action) {
    return reducer(state, action);
}
