import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './menu.actions';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { CountryProducts } from '../../models/country-products.model';

@Injectable({
    providedIn: 'root'
})
export class MenuEffects {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-api-key': environment.xKey,
          Authorization:  'Basic' + btoa(`${environment.username}:${environment.password}`)
        })
    };
    constructor(
        private actions$: Actions,
        private httpClient: HttpClient
    ) {}
    getCountryProducts$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadCountryProducts),
        mergeMap(a => this.httpClient.get(environment.url + 'home?country_id=' + a.countryIdentifier, this.httpOptions)),
        map(d => actions.loadCountryProductsSuccess({countryProducts: d as CountryProducts})),
        catchError(err => of(actions.loadCountryProductsFail({loadCountryProductsError: err})))
    ));
}
