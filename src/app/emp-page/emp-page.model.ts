export class EmpList {
    empNo: string;
    name: string;
    working: number;
    projectName: string;

    constructor(empNo: string, name: string, working: number, projectName: string) {
        this.empNo = empNo;
        this.name = name;
        this.working = working;
        this.projectName = projectName;
    }
}
