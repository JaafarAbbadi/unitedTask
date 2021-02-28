import { createReducer, on, Action } from '@ngrx/store';
import { Country, Settings } from '../../models/init.model';
import * as actions from './base.actions';

export const baseFeatureKey = 'base';

export interface BaseState {
    settings?: Settings;
    defaultCountry?: Country;
    countries?: Country[];
    getLocalStorageError?: any;
    getSettingsFromServer?: any;
}

export const initialBaseState: BaseState = {
};

const reducer = createReducer(
    initialBaseState,
    on(
        actions.getLocalStorageSuccess,
        (state, {settings, defaultCountry, countries}) => ({...state, settings, defaultCountry, countries})
    ),
    on(
        actions.getLocalStorageFail,
        (state, {getLocalStorageError}) => ({...state, getLocalStorageError })
    ),
    on(
        actions.getSettingsFromServerSuccess,
        (state, {settings, defaultCountry, countries}) => ({...state, settings, defaultCountry, countries})
    ),
    on(
        actions.changeCountrySuccess,
        (state, {defaultCountry}) => ({...state, defaultCountry})
    ),
    on(
        actions.changeLanguageSuccess,
        (state, {settings}) => ({...state, settings})
    )
);
export function baseReducer(state: BaseState | undefined, action: Action) {
    return reducer(state, action);
}
