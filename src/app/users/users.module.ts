import { NgModule }                   from '@angular/core';
import { NgxuxMatDialogModule }       from '@ngxux/ngxux-mat-dialog';
import { SharedModule }               from '../shared/shared.module';
import { UsersCreateDialogComponent } from './users-create-dialog/users-create-dialog.component';
import { UsersSearchComponent }       from './users-search/users-search.component';

@NgModule({

    declarations: [

        UsersSearchComponent,
        UsersCreateDialogComponent

    ],

    imports: [

        SharedModule,

        NgxuxMatDialogModule,

    ],

    entryComponents: [

        UsersCreateDialogComponent

    ]

})
export class UsersModule {
}
