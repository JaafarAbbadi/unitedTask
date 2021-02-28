import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/core/services/settings.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(5))
  });
  constructor(
    public s: SettingsService,
    public ts: TranslationService
  ) { }
  onSubmit(val){
    console.log(val);
  }
  ngOnInit() {}

}
