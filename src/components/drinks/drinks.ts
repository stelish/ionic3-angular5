import { Component } from '@angular/core';

/**
 * Generated class for the DrinksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'drinks',
  templateUrl: 'drinks.html'
})
export class DrinksComponent {

  text: string;

  constructor() {
    console.log('Hello DrinksComponent Component');
    this.text = 'Hello World';
  }

}
