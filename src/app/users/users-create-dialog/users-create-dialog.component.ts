import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({

    selector: 'app-users-create-dialog',
    templateUrl: './users-create-dialog.component.html',
    styleUrls: [ './users-create-dialog.component.scss' ]

})
export class UsersCreateDialogComponent {

    public formGroup = new FormGroup({

        name: new FormControl(''),

        username: new FormControl('', [

            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(32),

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255),

        ]),

        password2: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255),

        ]),

        enabled: new FormControl(true, Validators.required)

    });

    public constructor() {

    }


}
