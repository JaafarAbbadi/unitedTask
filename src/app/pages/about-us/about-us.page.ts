import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/core/services/init.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor(
    public ts: TranslationService,
    public is: InitService
  ) { }

  ngOnInit() {
  }

}
