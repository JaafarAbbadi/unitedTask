import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from 'src/app/core/features/menu/menu.effects';
import { StoreModule } from '@ngrx/store';
import { menuFeatureKey, menuReducer } from 'src/app/core/features/menu/menu.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    EffectsModule.forFeature([MenuEffects]),
    StoreModule.forFeature(menuFeatureKey, menuReducer)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
