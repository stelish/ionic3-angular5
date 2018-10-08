import { Component } from '@angular/core';

@Component({
  selector: 'current-order',
  templateUrl: 'current-order.html'
})
export class CurrentOrderComponent {

  customers:Array<Customer> = [
    {id:10001,name:'Luanna Freeth',balance:-32,orders:[]},
    {id:10002,name:'Leah Ropati',balance:0,orders:[]},
    {id:10003,name:'Anita Vogel',balance:0,orders:[]},
    {id:10004,name:'Sam Pule',balance:0,orders:[]},
    {id:10005,name:'Bubz Chancui',balance:-12,orders:[]},
    {id:10006,name:'Amanda Hindt',balance:-4,orders:[]},
    {id:10007,name:'Camilla Ngatai',balance:32,orders:[]},
  ];

  customer:Customer;

  constructor() {}

}

export interface Customer {
  id:number;
  name:string;
  balance:number;
  orders:any[];
}
