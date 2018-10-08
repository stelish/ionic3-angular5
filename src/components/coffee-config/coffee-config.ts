import { Component } from '@angular/core';

/**
 * Generated class for the CoffeeConfigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coffee-config',
  templateUrl: 'coffee-config.html'
})
export class CoffeeConfigComponent {

  text: string;

  constructor() {
    console.log('Hello CoffeeConfigComponent Component');
    this.text = 'Hello World';
  }

}
