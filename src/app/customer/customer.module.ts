import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './customer-list/filter-textbox/filter-textbox.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[CommonModule, SharedModule, FormsModule],
    declarations:[CustomerComponent, CustomerListComponent, FilterTextboxComponent ],
    exports:[CustomerComponent]
})
export class CustomerModule {

}