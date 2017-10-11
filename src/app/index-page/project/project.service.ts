import {
  ProjectList
} from './project.model';

export class ProjectService {
  projects: ProjectList[] = [
    new ProjectList(
      1,
      '5002',
      'จ้างพัฒนาระบบสารสนเทศรับแจ้งซ่อม/ปัญหาภายในโครงการ (Customer Caring)',
      1,
      new Date('2017-09-18'),
      new Date('2017-10-17'),
      new Date('2017-08-24'),
      5,
      15),
    new ProjectList(
      2,
      '5003',
      'จ้างพัฒนาระบบสารสนเทศรับแจ้งซ่อม/ปัญหาภายในโครงการ2 (Customer Caring)',
      2,
      new Date('2017-09-18'),
      new Date('2017-10-17'),
      new Date('2017-08-24'),
      5,
      15),
  ];

  displayProjects: ProjectList[] = [];

  getProject() {
    return this.projects.slice();
  }

  getProjectsByCmCode(cmCode: number) {
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
