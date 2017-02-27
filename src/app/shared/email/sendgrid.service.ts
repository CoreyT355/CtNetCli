import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Email } from './email.model';

@Injectable()
export class SendGridService {
    SENDGRID_API_URL: string = 'https://api.sendgrid.com/v3/mail';
    SENDGRID_API_KEY: string = '';
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    toEmail: string = 'coreyatess@gmail.com';
    subject: string = 'Test Email';
    constructor(private http: Http) { }
    sendEmail(email: Email): Observable<Response> {
        let body = JSON.stringify(email);
        return this.http.post(this.SENDGRID_API_URL + '/send', { body }, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}