import { Component,Input } from '@angular/core';

@Component({
  selector: 'stock-item',
  templateUrl: 'stock-item.html'
})
export class StockItemComponent {

  @Input() type:string;
  @Input() item:any;
  items:any[] = [];
  itemCount:number = 0;

  constructor() {}

  updateItem(num):void {
    this.itemCount = num;
  }

  counter() {
    return new Array(this.itemCount);
  }

}
