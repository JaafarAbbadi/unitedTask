import { Component , OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeLanguage, init } from './core/features/base/base.actions';
import { Init } from './core/models/init.model';
import { InitService } from './core/services/init.service';
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
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  initData$: Observable<Init>;
  constructor(
    public is: InitService,
    public ts: TranslationService,
    public store: Store,
    private popOverCtrl: PopoverController
  ) {
    this.store.dispatch(init());
    is.initSubscription();
    // select theme colors
  }
  ngOnInit(){
    this.favIcon.href = this.is.favicon;
  }
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
