import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quantity-ticker',
  templateUrl: 'quantity-ticker.html'
})
export class QuantityTickerComponent {

@Output()changeEvent: EventEmitter<any> = new EventEmitter<any>();

  count:number = 0;

  constructor() {}

  add(){
    this.count++;
    this.changeEvent.emit(this.count);
  }

  minus(){
    if(this.count==0){
      return;
    }
    this.count--;
    this.changeEvent.emit(this.count);
  }
}
