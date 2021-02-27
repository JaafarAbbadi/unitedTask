import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectInitData } from 'src/app/core/features/base/base.selectors';
import { loadCountryProducts } from 'src/app/core/features/menu/menu.actions';
import { selectProductCountry } from 'src/app/core/features/menu/menu.selectors';
import { CountryProducts } from 'src/app/core/models/country-products.model';
import { Init } from 'src/app/core/models/init.model';
import { InitService } from 'src/app/core/services/init.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  countryProducts$: Observable<CountryProducts>;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true
  }
  constructor(
    public is: InitService,
    public ts: TranslationService,
    private store: Store
  ) { }
  
  ngOnInit() {
    this.countryProducts$ = this.store.select(selectProductCountry);
  }
  ionViewDidEnter(){
    this.store.dispatch(loadCountryProducts({countryIdentifier: this.is.selectedCountry}));
  }
  ionViewDidLeave(){
    
  }
  loadCountryProducts(countryId: string){
    this.store.dispatch(loadCountryProducts({countryIdentifier: countryId}));
  }
}
