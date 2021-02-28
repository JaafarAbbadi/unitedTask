import { Component , OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { changeLanguage, getLocalStorage } from './core/features/base/base.actions';
import { defaultCountrySelector, settingsSelector } from './core/features/base/base.selectors';
import { Country, Settings } from './core/models/init.model';
import { SettingsService } from './core/services/settings.service';
import { TranslationService } from './core/services/translation.service';
import { LoginComponent } from './partials/login/login.component';
import { SelectCountryComponent } from './partials/select-country/select-country.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{

  public appPages: {title: string, url: string, icon: string}[];
  constructor(
    public ts: TranslationService,
    public store: Store,
    private popOverCtrl: PopoverController,
    public s: SettingsService
  ) {
    this.store.dispatch(getLocalStorage());
  }
  ngOnInit(){}
  changeLanguage(c: string){
    this.store.dispatch(changeLanguage({code: c}));
  }
  async presentSelectCountry(){
    const popOver = await this.popOverCtrl.create({
      component: SelectCountryComponent
    });
    return popOver.present();
  }
  async presentLogin(){
    const popOver = await this.popOverCtrl.create({
      component: LoginComponent
    });
    return popOver.present();
  }
}
