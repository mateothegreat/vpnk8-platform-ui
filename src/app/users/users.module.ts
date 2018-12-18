import { NgModule }                   from '@angular/core';
import { RouterModule }               from '@angular/router';
import { NgxuxMatDialogModule }       from '@ngxux/ngxux-mat-dialog';
import { AuthGuard }                  from '../_lib/AuthGuard';
import { SharedModule }               from '../shared/shared.module';
import { UsersCreateDialogComponent } from './users-create-dialog/users-create-dialog.component';
import { UsersSearchComponent }       from './users-search/users-search.component';
import { UsersComponent }             from './users.component';

@NgModule({

    declarations: [

        UsersSearchComponent,
        UsersCreateDialogComponent

    ],

    imports: [

        SharedModule,

        NgxuxMatDialogModule,

        RouterModule.forRoot([

            {

                path: 'users',
                component: UsersComponent,

                children: [

                    {

                        path: 'search',
                        component: UsersSearchComponent,
                        canActivate: [ AuthGuard ]

                    }, {

                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'search'

                    }

                ]

            }

        ])

    ],

    entryComponents: [

        UsersCreateDialogComponent

    ]

})
export class UsersModule {
}
