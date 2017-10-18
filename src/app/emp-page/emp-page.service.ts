import { EmpList } from './emp-page.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {
    emps: EmpList[] = [];
    constructor( private http: Http) {}

    getEmpList(empNo: string): Promise< any > {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:8080/JSFCDIMavenProject/crunchify/getperson/' + empNo)
            .subscribe(
                (res: Response) => {
                    resolve(res.json());
                }
            );
        });
    }
}
