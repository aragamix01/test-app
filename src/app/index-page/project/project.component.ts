import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { ProjectService } from './project.service';
import {
  ProjectList
} from './project.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit, AfterViewInit {
  projects: ProjectList[] = [];
  selProject: ProjectList[];
  constructor( private projectService: ProjectService,
    private appService: AppService,
    private router: Router) {

  }

  ngOnInit() {
    this.projectService.getProject().then((data) => {
      this.projects = data;
    });
  }

  ngAfterViewInit() { }

  onRowSelect(event) {
    console.log(event.data.projectId);
    this.appService.pjParam = event.data.projectId;
    this.router.navigate(['detail']);
  }
}
