import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'ctnet-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private af: AngularFire, private router: Router, private _iconRegistry: MdIconRegistry, private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'ctnet-logo', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/ctnet-logo.svg'));
  }

  logout() {
        this.af.auth.logout();
        this.router.navigate(['/'])
    }
}
