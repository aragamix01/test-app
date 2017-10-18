import { Http, Response } from '@angular/http';
import { DetailList } from './detail-page.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {
    // details: DetailList[] = [];

    constructor(private http: Http) {}

    getDetail(pjId: number): Promise< any > {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:8080/JSFCDIMavenProject/crunchify/getdetail/' + pjId)
            .subscribe(
                (res: Response) => {
                    resolve(res.json());
                }
            );
        });
    }
}
