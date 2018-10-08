import { Component, Input } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: 'orders.html'
})
export class OrdersComponent {

  @Input() orderList:any[] = [];

  constructor() {}

}
