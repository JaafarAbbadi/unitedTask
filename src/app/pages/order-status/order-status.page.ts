import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/core/services/init.service';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  constructor(
    public is: InitService,
    public ts: TranslationService
  ) { }

  ngOnInit() {
  }

}
