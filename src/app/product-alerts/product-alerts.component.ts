import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() productee!: Product | undefined; //Input ile bir üst bileşenden veri gelir.
  @Output() notify = new EventEmitter(); //Verileri bir üst bileşene iletir.

  constructor() {}

  ngOnInit(): void {}
}
