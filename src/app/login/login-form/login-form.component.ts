import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent {

    public formGroup = new FormGroup({

        username: new FormControl('', [

            Validators.required,

        ]),

        password: new FormControl('', [

            Validators.required,

        ]),

    });

    public constructor() {

    }

    public onLoginClick() {


    }

}
