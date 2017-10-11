import { CustomerList } from './customer.model';
export class CustomerService {
    customerList: CustomerList[] = [
        new CustomerList(1, 'NHA', ''),
        new CustomerList(2, 'CDG', '')
    ];

    getCustomerList() {
        return this.customerList.slice();
    }
}
