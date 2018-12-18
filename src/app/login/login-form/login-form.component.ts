import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { AuthenticationService }              from '../../_lib/AuthenticationService';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent {

    public formGroup = new FormGroup({

        username: new FormControl('admin@admin.com', [

            Validators.required,

        ]),

        password: new FormControl('admin', [

            Validators.required,

        ]),

    });

    public constructor(private authenticationService: AuthenticationService,
                       private router: Router) {

    }

    public onLoginClick() {

        this.authenticationService.login(this.formGroup.controls.username.value, this.formGroup.controls.password.value).subscribe((result: boolean) => {

            if (result) {

                this.router.navigate([ '/home' ]);

            }

        });

    }

}
