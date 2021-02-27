import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectInitData } from 'src/app/core/features/base/base.selectors';
import { loadCountryProducts } from 'src/app/core/features/menu/menu.actions';
import { selectProductCountry } from 'src/app/core/features/menu/menu.selectors';
import { Category, CountryProducts } from 'src/app/core/models/country-products.model';
import { Init } from 'src/app/core/models/init.model';
import { InitService } from 'src/app/core/services/init.service';
import { TranslationService } from 'src/app/core/services/translation.service';
import { ImageViewComponent } from 'src/app/partials/image-view/image-view.component';
import { SelectCountryComponent } from 'src/app/partials/select-country/select-country.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  sub: Subscription;
  categories: Category[];
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    public is: InitService,
    public ts: TranslationService,
    private store: Store,
    private popOverCtrl: PopoverController
  ) { }
  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.sub = this.store.select(selectProductCountry).subscribe(cp => {
      this.categories = cp?.categories;
    });
  }
  ionViewDidLeave(){
    this.sub.unsubscribe();
  }
  loadCountryProducts(countryId: string){
    this.store.dispatch(loadCountryProducts({countryIdentifier: countryId}));
  }
  async presentSelectCountry(){
    const popOver = await this.popOverCtrl.create({
      component: SelectCountryComponent
    });
    return popOver.present();
  }
  async presentImage(url: string){
    const popOver = await this.popOverCtrl.create({
      component: ImageViewComponent,
      componentProps: {imageUrl: url}
    });
    return popOver.present();
  }
}
