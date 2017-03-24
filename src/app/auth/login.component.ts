import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'toastr-ng2';

import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  public error: any;
  login: FormGroup;
  constructor(private af: AngularFire, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      "email": [null, Validators.required],
      "password": [null, Validators.required]
    });
  }

  onSubmit(formData) {
    if (formData.valid) {
      //console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          this.toastr.success("Successfully logged in!", "Yippeee");
          this.router.navigate(['/dashboard']);
        }).catch(
        (err) => {
          this.toastr.error(`Login failed: ${err}`, "Uh Oh!");
        })
    } else {
      this.toastr.error("Your form is invalid.", "Uh Oh!");
    }
  }
}