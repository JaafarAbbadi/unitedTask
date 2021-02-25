import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './core/features/base/base.actions';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
  ];
  constructor(
    store: Store
  ) {
    store.dispatch(init());
  }
}
