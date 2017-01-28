import { Component, Inject } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent { 
    public userData: any;
    constructor(private af: AngularFire) {  }

    ngOnInit() {
        this.af.auth.subscribe(auth => {
          this.userData = auth;
        });
    }
}