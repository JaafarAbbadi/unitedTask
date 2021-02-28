import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings.service';

import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  constructor(
    public s: SettingsService,
    public ts: TranslationService
  ) { }

  ngOnInit() {
  }

}
