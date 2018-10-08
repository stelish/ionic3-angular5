import { Component } from '@angular/core';

@Component({
  selector: 'milk-type',
  templateUrl: 'milk-type.html'
})
export class MilkTypeComponent {

  milkList:any[] = [
    {name:'full',params:[]},
    {name:'trim',params:[]},
    {name:'soy',params:[]},
    {name:'almond',params:[]},
  ];

  constructor() {}

}
