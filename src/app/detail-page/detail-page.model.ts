export class DetailList {
    empNo: string;
    name: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    working: number;
    assign: number;
    positionName: string;

    constructor(empNo: string, name: string, startDate: Date,
        endDate: Date, duration: number, working: number, assign: number, positionName: string) {
            this.empNo = empNo;
            this.name = name;
            this.startDate = startDate;
            this.endDate = endDate;
            this.duration = duration;
            this.working = working;
            this.assign = assign;
            this.positionName = positionName;
    }
}
