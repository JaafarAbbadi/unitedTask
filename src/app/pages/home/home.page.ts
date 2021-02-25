import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from 'src/app/core/features/base/base.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(init());
  }

}
