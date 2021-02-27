import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './base.actions';
import { catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Init } from '../../models/init.model';
import { of } from 'rxjs';
import { InitService } from '../../services/init.service';

@Injectable({
    providedIn: 'root'
})
export class BaseEffects {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-api-key': environment.xKey,
          Authorization:  'Basic' + btoa(`${environment.username}:${environment.password}`)
        })
    };
    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private is: InitService,
    ) {}
    initialize$ = createEffect(() => this.actions$.pipe(
        ofType(actions.init),
        mergeMap(() => this.httpClient.get(environment.url + 'initialize', this.httpOptions)),
        map(d => actions.initSuccess({data: d as Init})),
        catchError(err => of(actions.initFail({initFailError: err})))
    ));
    changeLan$ = createEffect(() => this.actions$.pipe(
        ofType(actions.changeLanguage),
        mergeMap(action => this.httpClient.get(environment.url + 'initialize', this.httpOptions).pipe(
            map(data => ({d: data as Init, a: action}))
        )),
        map(payload => {
            payload.d.settings.default_language = payload.a.code;
            return payload.d;
        }),
        map(d => actions.initSuccess({data: d}))
    ));
    changeCountry$ = createEffect(() => this.actions$.pipe(
        ofType(actions.changeCountry),
        mergeMap(action => this.httpClient.get(environment.url + 'initialize', this.httpOptions).pipe(
            map(data => {
                const i: Init = data as Init;
                i.settings.default_language = this.is.defaultLanguage;
                return {d: i , a: action};
            })
        )),
        map(payload => {
            payload.d.default_country = payload.d.countries.find(c => c.country_id === payload.a.countryIdentifier);
            return payload.d;
        }),
        map(d => actions.initSuccess({data: d}))
    ));
}
