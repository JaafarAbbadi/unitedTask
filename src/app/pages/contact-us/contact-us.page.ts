import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(
    public ts: TranslationService,
    public s: SettingsService
  ) { }

  ngOnInit() {
  }

}
