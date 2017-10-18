import {
  Http,
  Response
} from '@angular/http';
import {
  Injectable
} from '@angular/core';
import {
  CustomerList
} from './customer.model';

@Injectable()
export class CustomerService {
  customerList: CustomerList[] = [];

  constructor(private http: Http) {}

  getCustomerList(): Promise < any > {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/JSFCDIMavenProject/crunchify/getcustomer')
        .subscribe(
          (response: Response) => {
            resolve(response.json());
          }
        );
    });
  }
}
