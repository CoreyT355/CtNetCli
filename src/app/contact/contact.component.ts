import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

import { Email } from '../shared/email/email.model';
import { SendGridService } from '../shared/email/sendgrid.service';

@Component({
    selector: 'ctnet-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
    componentName: string = 'Contact Me';
    contact: FormGroup;
    constructor(private fb: FormBuilder, private router: Router, private sendGridService: SendGridService, private toastr: ToastrService) { }

    ngOnInit(): void { 
        this.contact = this.fb.group({
            'fromEmail': [ null, Validators.required ],
            'subject': [ null, [ Validators.required, Validators.minLength(5), Validators.maxLength(100) ] ],
            'content': [ null, [ Validators.required, Validators.minLength(1), Validators.maxLength(500) ] ]
        });
    }
    submitForm(value: any): void {
        this.sendGridService.sendEmail(value)
            .subscribe(() => {
                this.toastr.success('Email sent. I will reply eventually.', 'Success');
                this.router.navigateByUrl('contact');
            },
            err => this.toastr.error(`Email failed to send: ${err}`, "Uh oh")
            );
    }
}