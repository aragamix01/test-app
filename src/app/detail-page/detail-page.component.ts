import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { DetailService } from './detail-page.service';
import { DetailList } from './detail-page.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  providers: [DetailService]
})
export class DetailPageComponent implements OnInit {
  details: DetailList[] = [];
  selEmp: DetailList[];

  constructor( private detailService: DetailService,
  private appService: AppService,
  private router: Router ) {}

  ngOnInit() {
    this.detailService.getDetail(this.appService.pjParam).then((data) => {
      this.details = data;
      console.log(this.details);
      console.log('data');
    });
  }

  onRowSelect(event) {
    console.log(event.data.empNo);
    this.appService.empParam = event.data.empNo;
    this.router.navigate(['employee']);
  }
}
