import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { changeCountry } from 'src/app/core/features/base/base.actions';
import { SettingsService } from 'src/app/core/services/settings.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss'],
})
export class SelectCountryComponent implements OnInit {

  constructor(
    public ts: TranslationService,
    public s: SettingsService,
    private popOverCtrl: PopoverController,
    private store: Store
  ) { }

  ngOnInit() {}
  radioChange(ev){
    console.log(ev);
    this.store.dispatch(changeCountry({countryIdentifier: ev.detail.value}));
    this.dismiss();
  }
  dismiss(){
    this.popOverCtrl.dismiss();
  }
}
