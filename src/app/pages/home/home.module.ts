import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { baseFeatureKey, baseReducer } from 'src/app/core/features/base/base.reducers';
import { StoreModule } from '@ngrx/store';
import { BaseEffects } from 'src/app/core/features/base/base.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreModule.forFeature(baseFeatureKey, baseReducer),
    EffectsModule.forFeature([BaseEffects])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
