import { Component } from '@angular/core';

@Component({
  selector: 'syrup-type',
  templateUrl: 'syrup-type.html'
})
export class SyrupTypeComponent {

  syrupList:any[] = [
    {name:'caramel',params:[]},
    {name:'vanilla',params:[]},
    {name:'chai',params:[]}
  ];

  constructor() {}

}
