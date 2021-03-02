import { createAction, props } from '@ngrx/store';
import { CountryProducts } from '../../models/country-products.model';


export const loadCountryProducts = createAction(
    '[menu] Load Country Products',
    props<{countryIdentifier: string}>()
);
export const loadCountryProductsSuccess = createAction(
    '[menu] Load Country Products Success',
    props<{countryProducts: CountryProducts}>()
);
export const loadCountryProductsFail = createAction(
    '[menu] Load Country Products Failed',
    props<{loadCountryProductsError: any}>()
);
