import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe }   from './truncate.pipe';

@NgModule({
    exports: [
        TruncatePipe
    ],
    declarations: [ 
        TruncatePipe 
    ],
})
export class PipesModule { }
