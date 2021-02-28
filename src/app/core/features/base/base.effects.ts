import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './base.actions';
import { catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Settings, Country, Init } from '../../models/init.model';
import { forkJoin, from, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { TranslationService } from '../../services/translation.service';
import { Store } from '@ngrx/store';
import { countriesSelector, settingsSelector } from './base.selectors';


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
        private ts: TranslationService,
        private storage: Storage,
        private store: Store
    ) {}
    getLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getLocalStorage),
        switchMap(_ => forkJoin<Settings, Country, Country[]>([
            from(this.storage.get('settings')),
            from(this.storage.get('defaultCountry')),
            from(this.storage.get('countries'))
        ])),
        map(([s, def, c]) => s && def && c ?
            actions.getLocalStorageSuccess({settings: s, defaultCountry: def, countries: c})
            : actions.getSettingsFromServer()
        ),
        catchError(err =>
            of(actions.getLocalStorageFail({getLocalStorageError: err}))
        )
    ));
    getSettingsFromServer$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getSettingsFromServer || actions.getSettingsFromServerFail),
        mergeMap(() => this.httpClient.get<Init>(environment.url + 'initialize', this.httpOptions)),
        map(i => actions.getSettingsFromServerSuccess({settings: i.settings, defaultCountry: i.default_country, countries: i.countries})),
        catchError(err => of(actions.getSettingsFromServerFail({getSettingsFromServer: err})))
    ));
    setLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getSettingsFromServerSuccess),
        switchMap(a => forkJoin([
            from(this.storage.set('settings', a.settings)),
            from(this.storage.set('defaultCountry', a.defaultCountry)),
            from(this.storage.set('countries', a.countries))
        ])),
        map(_ => actions.setLocalStorageSuccess()),
        catchError(err => of(actions.setLocalStorageFail({setLocalStorageError: err})))
    ));
    changeLanguage$ = createEffect(() => this.actions$.pipe(
        ofType(actions.changeLanguage),
        withLatestFrom(from<Promise<Settings>>(this.storage.get('settings'))),
        switchMap(([a, s]) => {
            const settings = Object.assign({}, s);
            settings.default_language = a.code;
            return of(settings);
        }),
        switchMap(s => {
            if (this.ts.languages.includes(s.default_language)){
                this.storage.set('settings', s).then();
                return of(actions.changeLanguageSuccess({settings: s}));
            }
            else {
                return of(actions.changeLanguageFail({changeLanguageError: `${s.default_language} translation is not available`}));
            }
        })
    ));
    changeCountry$ = createEffect(() => this.actions$.pipe(
        ofType(actions.changeCountry),
        withLatestFrom(this.store.select(countriesSelector)),
        map(([a, countries]) => countries.find(c => c.country_id === a.countryIdentifier)),
        map(c => {
            if (c){
                this.storage.set('defaultCountry', c).then();
                return actions.changeCountrySuccess({defaultCountry: c});
            }
            else {
                return actions.changeCountryFail({changeCountryError: 'id is not found'});
            }
        }),
    ));
}
