export class ProjectList {
    projectId: number;
    projectCode: string;
    projectName: string;
    cmCode: number;
    startDate: Date;
    endDate: Date;
    IssuingDate: Date;
    startAlert: number;
    endAlert: number;

    constructor(projectId: number, projectCode: string,  projectName: string, cmCode: number,
        startDate: Date, endDate: Date, IssuingDate: Date, startAlert: number, endAlert: number) {
            this.projectId = projectId;
            this.projectCode = projectCode;
            this.projectName = projectName;
            this.cmCode = cmCode;
            this.startDate = startDate;
            this.endDate = endDate;
            this.IssuingDate = IssuingDate;
            this.startAlert = startAlert;
            this.endAlert = endAlert;
    }
}
