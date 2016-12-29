import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ctnet-about',
    templateUrl: './about.component.html',
    //styleUrls: ['components/about/about.component.css']
})
export class AboutComponent {
    name: string = "About Me";

    constructor(private params: ActivatedRoute) { }
}