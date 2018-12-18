import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { SharedModule }        from '../shared/shared.module';
import { LoginFormComponent }  from './login-form/login-form.component';
import { LoginResetComponent } from './login-reset/login-reset.component';
import { LoginComponent }      from './login.component';

@NgModule({

    declarations: [

        LoginComponent,

        LoginFormComponent,

        LoginResetComponent

    ],

    imports: [

        SharedModule,

        RouterModule.forRoot([

            {

                path: 'login',
                component: LoginComponent,

                children: [

                    {

                        path: '',
                        component: LoginFormComponent

                    }

                ]

            }

        ])

    ]

})
export class LoginModule {
}
