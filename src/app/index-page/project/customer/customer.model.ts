export class CustomerList {
    cmCode: number;
    customerCode: string;
    customerName: string;

    constructor(cmCode: number, customerCode: string, customerName: string) {
        this.cmCode = cmCode;
        this.customerCode = customerCode;
        this.customerName = customerName;
    }
}
