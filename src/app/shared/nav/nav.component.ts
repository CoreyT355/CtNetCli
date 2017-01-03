import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';

@Component({
    selector: 'ctnet-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
    constructor(private af: AngularFire, private router: Router) { }

    logout() {
        this.af.auth.logout();
        this.router.navigate(['/'])
    }

    ngOnInit() { }
}