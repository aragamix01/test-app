import {
  ProjectList
} from '../project.model';
import {
  CustomerList
} from './customer.model';
import {
  CustomerService
} from './customer.service';
import {
  ProjectService
} from '../project.service';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  SelectItem
} from 'primeng/primeng';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {

  customerSelectList: SelectItem[];
  customerList: CustomerList[] = [];
  cmCode: number;
  @Output() customerChangeEvent: EventEmitter < ProjectList[] > = new EventEmitter();

  constructor(private projectService: ProjectService,
    private customerService: CustomerService) {
    console.log('con');
  }

  ngOnInit() {

    this.customerSelectList = [];
    this.customerSelectList.push({
      label: '--เลือก--',
      value: null
    });
    this.customerService.getCustomerList().then((data) => {
      this.customerList = data;

      console.log('check');
      for (const cl of this.customerList) {
        this.customerSelectList.push({
          label: cl.customerCode,
          value: cl.cmCode
        });
      }
    });
  }

  getProjects() {
    this.customerChangeEvent.emit(this.projectService.getProjectsByCmCode(this.cmCode));
  }

}
