import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interface';
import {DataService} from '../core/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  title :string;
  people: ICustomer[];
  isVisible=true;

  constructor(private dataService : DataService  ) { }

  ngOnInit() {
    this.title='Customer';
    this.dataService.getCustomers()
          .subscribe((Icustomers: ICustomer[])=> this.people=Icustomers )  }

  changeVisibility(){
    this.isVisible=!this.isVisible;
  }
}
