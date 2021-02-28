import { createAction, props } from '@ngrx/store';
import { Country, Init, Settings } from '../../models/init.model';
// missing login, change settings

export const getLocalStorage = createAction('[Base] Get Local Storage');
export const getLocalStorageSuccess = createAction('[Base] Get Local Storage Success', props<{settings: Settings, defaultCountry: Country, countries: Country[]}>());
export const getLocalStorageFail = createAction('[Base] Get Local Storage Fail', props<{getLocalStorageError: any}>());
export const setLocalStorage = createAction('[Base] Set Local Storage', props<{settings: Settings, defaultCountry: Country, countries: Country[]}>());
export const setLocalStorageSuccess = createAction('[Base] Set Local Storage Success');
export const setLocalStorageFail = createAction('[Base] Set Local Storage Fail', props<{setLocalStorageError: any}>());

export const getSettingsFromServer = createAction('[Base] Get Settings From Server');
export const getSettingsFromServerSuccess = createAction('[Base] Get Settings From Server Success', props<{settings?: Settings, defaultCountry?: Country, countries?: Country[]}>());
export const getSettingsFromServerFail = createAction('[Base] Get Settings From Server Fail', props<{getSettingsFromServer: any}>());

export const changeLanguage = createAction('[Base] Change Language', props<{code: string}>());
export const changeLanguageSuccess = createAction('[Base] Change Language Success', props<{settings: Settings}>());
export const changeLanguageFail = createAction('[Base] Change Language Fail', props<{changeLanguageError: any}>());

export const changeCountry = createAction('[Base] Change Country', props<{countryIdentifier: string}>());
export const changeCountrySuccess = createAction('[Base] Change Country Success', props<{defaultCountry: Country}>());
export const changeCountryFail = createAction('[Base] Change Country Error', props<{changeCountryError: any}>());
