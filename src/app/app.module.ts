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
import { AuthGuard }                     from './_lib/AuthGuard';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home/home.component';
import { LoginModule }       from './login/login.module';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent }    from './users/users.component';
import { UsersModule }       from './users/users.module';

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

        LoginModule,
        UsersModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent,
                canActivate: [ AuthGuard ]

            }, {

                path: 'settings',
                component: SettingsComponent,
                canActivate: [ AuthGuard ]

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
