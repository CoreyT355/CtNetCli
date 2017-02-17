import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
  selector: 'ctnet-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private af: AngularFire, private router: Router) { }

  logout() {
        this.af.auth.logout();
        this.router.navigate(['/'])
    }
}
