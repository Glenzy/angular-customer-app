import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
    selector:'app-customers',
    templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
    title:string;
    people: ICustomer [];

    constructor(private dataServices:DataService){}

    ngOnInit(){
        this.title = "Customers";
        this.dataServices.getCustomers().subscribe((customers: ICustomer[]) => this.people = customers);
    }
}

