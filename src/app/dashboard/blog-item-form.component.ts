import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'blog-item-form',
    inputs: ['form'],
    templateUrl: './blog-item-form.component.html'
})
export class BlogItemFormComponent implements OnInit, OnChanges {
    form: FormGroup;
    @Input() initialValue: any;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            "title": [null, Validators.required],
            "imageUrl": "",
            "text": [null, Validators.required],
            "author": "CoreyT",
            "published": false,
            "dateCreated": Date.now(),
            "dateModified": Date.now()
        });
    }
    ngOnInit(): void { }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['initialValue']) {
            this.form.patchValue(changes['initialValue'].currentValue);
        }
    }
}