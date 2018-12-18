import { NgModule }                      from '@angular/core';
import { MatSidenavModule }              from '@angular/material';
import { BrowserModule }                 from '@angular/platform-browser';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';
import { RouterModule }                  from '@angular/router';
import { NgxuxMatDialogModule }          from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatHeaderNavModule }       from '@ngxux/ngxux-mat-header-nav';
import { NgxuxMatTableModule }           from '@ngxux/ngxux-mat-table';
import { NgxuxMatToolbarModule }         from '@ngxux/ngxux-mat-toolbar';
import { NgxuxMatVerticalToolbarModule } from '@ngxux/ngxux-mat-vertical-toolbar';

import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { SettingsComponent }    from './settings/settings.component';
import { UsersSearchComponent } from './users/users-search/users-search.component';
import { UsersComponent }       from './users/users.component';
import { UsersModule }          from './users/users.module';

@NgModule({

    declarations: [

        AppComponent,

        UsersComponent,

        SettingsComponent,

        HomeComponent,


    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        MatSidenavModule,

        NgxuxMatDialogModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatTableModule,
        NgxuxMatToolbarModule,
        NgxuxMatVerticalToolbarModule,

        UsersModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'users',
                component: UsersComponent,

                children: [

                    {

                        path: 'search',
                        component: UsersSearchComponent

                    }, {

                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'search'

                    }

                ]

            }, {

                path: 'settings',
                component: SettingsComponent

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
