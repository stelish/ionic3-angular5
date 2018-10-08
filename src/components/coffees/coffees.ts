import { Component } from '@angular/core';

@Component({
  selector: 'coffees',
  templateUrl: 'coffees.html'
})
export class CoffeesComponent {

  coffeeList:any[] = [
    {name:'late',params:[],quantity:1},
    {name:'flat-white',params:[],quantity:1},
    {name:'cappaccino',params:[],quantity:1},
    {name:'mochaccino',params:[],quantity:1},
    {name:'hot chocolate',params:[],quantity:1},
  ];

  constructor() {
  }

}
