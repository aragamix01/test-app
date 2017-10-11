
import { ProjectService } from './project.service';
import {
  ProjectList
} from './project.model';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects: ProjectList[] = [];
  selProject: ProjectList[];

  constructor( private projectService: ProjectService ) {}

  ngOnInit() {
    this.projects = this.projectService.getProject();
  }

  onRowSelect(event) {
    console.log(event.data.projectName);
  }
}
