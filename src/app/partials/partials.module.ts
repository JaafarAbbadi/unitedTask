import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectCountryComponent } from './select-country/select-country.component';
import { ImageViewComponent } from './image-view/image-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    LoginComponent,
    SelectCountryComponent,
    ImageViewComponent
  ],
  exports: [
    LoginComponent,
    SelectCountryComponent,
    ImageViewComponent
  ]
})
export class PartialsModule { }
