import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip } from 'rxjs/operators';
import { countriesSelector, defaultCountrySelector, settingsSelector } from '../features/base/base.selectors';
import { loadCountryProducts } from '../features/menu/menu.actions';
import { Country, Settings } from '../models/init.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings;
  defaultCountry: Country;
  countries: Country[];
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  constructor(private store: Store) {
    this.store.select(settingsSelector).pipe(skip(1)).subscribe(s => {
      this.settings = s;
      document.documentElement.style.setProperty('--ion-color-primary', s.primary_color);
      document.documentElement.style.setProperty('--ion-color-secondary', s.header_color);
      document.documentElement.style.setProperty('--ion-color-tertiary', s.icon_color);
      this.favIcon.href = this.settings.favicon;
    });
    this.store.select(defaultCountrySelector).pipe(skip(1)).subscribe(d => {
      this.defaultCountry = d;
      this.store.dispatch(loadCountryProducts({countryIdentifier: this.defaultCountry?.country_id}));
    });
    this.store.select(countriesSelector).subscribe(countries => this.countries = countries);
  }
}
