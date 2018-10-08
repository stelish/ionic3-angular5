import { Component } from '@angular/core';

/**
 * Generated class for the SweetnerTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sweetner-type',
  templateUrl: 'sweetner-type.html'
})
export class SweetnerTypeComponent {

  text: string;

  constructor() {
    console.log('Hello SweetnerTypeComponent Component');
    this.text = 'Hello World';
  }

}
