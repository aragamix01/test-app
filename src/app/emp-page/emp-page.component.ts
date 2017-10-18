import { AppService } from '../app.service';
import {
  EmpList
} from './emp-page.model';
import {
  EmpService
} from './emp-page.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-emp-page',
  templateUrl: './emp-page.component.html',
  styleUrls: ['./emp-page.component.scss'],
  providers: [EmpService]
})
export class EmpPageComponent implements OnInit {

  data: any;
  emps: EmpList[] = [];
  val: any[] = [];
  lebel: any[] = [];
  colors: any[] = [];
  options: any;
  isValue = false;

  constructor(private empService: EmpService,
  private appService: AppService) {

    this.empService.getEmpList(this.appService.empParam).then((data) => {
      this.emps = data;
      console.log(data);
      let i: number;
      for (i = 0; i < this.emps.length; i++) {
        this.colors.push(this.randomColor());
        this.val.push(this.emps[i].working);
        this.lebel.push(this.emps[i].projectName);
      }

      this.data = {
        labels: this.lebel,
        datasets: [{
          data: this.val,
          backgroundColor: this.colors
        }]
      };

      this.options = {
        legend: {
          display: true,
          position: 'bottom',
          fontSize: 26
        }
      };
      console.log('value');
      this.isValue = true;
    });
  }

  ngOnInit() {}

  randomColor() {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  }

}
