import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeLanguage, init } from './core/features/base/base.actions';
import { selectInitData } from './core/features/base/base.selectors';
import { Init } from './core/models/init.model';
import { InitService } from './core/services/init.service';
import { TranslationService } from './core/services/translation.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages: {title: string, url: string, icon: string}[];

  initData$: Observable<Init>;
  constructor(
    public is: InitService,
    public ts: TranslationService,
    public store: Store
  ) {
    this.store.dispatch(init());
    is.initSubscription();
    // select theme colors
    
  }
  changeLanguage(c: string){
    this.store.dispatch(changeLanguage({code: c}));
  }
}
