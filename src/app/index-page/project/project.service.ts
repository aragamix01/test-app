import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {
  ProjectList
} from './project.model';

@Injectable()
export class ProjectService {
  projects: ProjectList[] = [];
  displayProjects: ProjectList[] = [];

  constructor(private http: Http) {}


  getProject(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.get('http://localhost:8080/JSFCDIMavenProject/crunchify/getproject')
        .subscribe(
          (res: Response) => {
            resolve(res.json());
            this.projects = res.json();
          }
        );
      }, 200);
    });
  }

  getProjectsByCmCode(cmCode: number) {
    console.log(cmCode);
    this.displayProjects = this.projects.slice();
    let i = 0;
    for (const dp of this.displayProjects){
      if ( dp.cmCode !== cmCode ) {
        this.displayProjects.splice(i, 1);
      }
      i++;
    }
    return this.displayProjects.slice();
  }
}
