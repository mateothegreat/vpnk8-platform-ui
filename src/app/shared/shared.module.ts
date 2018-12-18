import { CommonModule }                                                              from '@angular/common';
import { HttpClientModule }                                                          from '@angular/common/http';
import { NgModule }                                                                  from '@angular/core';
import { ReactiveFormsModule }                                                       from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { AutofocusDirective }                                                        from '../_lib/AutofocusDirective';

@NgModule({

    declarations: [

        AutofocusDirective

    ],

    imports: [

        CommonModule,
        HttpClientModule,

        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,

    ],

    exports: [

        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,

        AutofocusDirective

    ]

})
export class SharedModule {
}
