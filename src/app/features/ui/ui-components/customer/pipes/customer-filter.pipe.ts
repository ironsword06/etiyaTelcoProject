import { Pipe, PipeTransform } from "@angular/core";

import { CustomerModel } from "../models/customer";

;
@Pipe({
  name: 'customerFilterPipe',
})
export class CustomerFilterPipe implements PipeTransform {
  transform(
    customer: CustomerModel[],
    id: string ,
    customerId: number ,
    firstName: string,
    lastName: string,
    gsmNumber:string,
    orderNumber:number,
    // accountNumber:string,

      ): CustomerModel[] {
    let filteredCustomer: CustomerModel[] = customer;

    if (firstName != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.firstName.toLowerCase().includes(firstName.toLowerCase())
      );
    }
    if (lastName != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.lastName.toLowerCase().includes(lastName.toLowerCase())
      );
    }
    if(id !=null){
      filteredCustomer = filteredCustomer.filter((c)=> {
        c.id===Number.parseInt(id)
      })
    }
    if(customerId !=null){
      filteredCustomer = filteredCustomer.filter((c)=> c.customerId===customerId)
    }
    if (gsmNumber != '') {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.contactMedium.mobilePhone.toLowerCase().includes(gsmNumber.toLowerCase())
      );
    }
    
    if (orderNumber != null) {
      filteredCustomer = filteredCustomer.filter((c) =>
        c.billingAccounts[0].orders[0].orderNumber=orderNumber
      );
    }

    return filteredCustomer;

  }
}