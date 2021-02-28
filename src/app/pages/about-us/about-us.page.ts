import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');

  constructor(
    public ts: TranslationService,
    public s: SettingsService
  ) { }

  ngOnInit() {
  }

}
