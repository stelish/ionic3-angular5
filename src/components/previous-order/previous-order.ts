import { Component } from '@angular/core';

/**
 * Generated class for the PreviousOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'previous-order',
  templateUrl: 'previous-order.html'
})
export class PreviousOrderComponent {

  text: string;

  constructor() {
    console.log('Hello PreviousOrderComponent Component');
    this.text = 'Hello World';
  }

}
