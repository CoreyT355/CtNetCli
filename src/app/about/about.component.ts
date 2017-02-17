import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ctnet-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    componentName: string = "Who I Am";
    constructor(private params: ActivatedRoute) { }
}