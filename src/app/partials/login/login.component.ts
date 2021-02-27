import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { InitService } from 'src/app/core/services/init.service';
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
    public is: InitService,
    public ts: TranslationService
  ) { }
  onSubmit(val){
    console.log(val);
  }
  ngOnInit() {}

}
