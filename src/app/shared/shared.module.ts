import { CommonModule }                                             from '@angular/common';
import { NgModule }                                                 from '@angular/core';
import { ReactiveFormsModule }                                      from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { AutofocusDirective }                                       from '../_lib/AutofocusDirective';

@NgModule({

    declarations: [

        AutofocusDirective

    ],

    imports: [

        CommonModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,

    ],

    exports: [

        CommonModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,

        AutofocusDirective

    ]

})
export class SharedModule {
}
