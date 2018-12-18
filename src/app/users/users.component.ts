import { Component }                                     from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { UsersCreateDialogComponent }                    from './users-create-dialog/users-create-dialog.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: [ './users.component.scss' ]
})
export class UsersComponent {

    public constructor(private ngxuxMatDialogService: NgxuxMatDialogService) {


        this.onButtonClick(null);

    }

    public onButtonClick(e: any): void {

        this.ngxuxMatDialogService.open(UsersCreateDialogComponent, new NgxuxMatDialogSettings({

            id: 'create-user',

            title: 'Create VPN User',

            width: '400px',
            height: '450px',

            backLabel: 'Cancel',
            backShow: true,

            nextLabel: 'Create User',
            nextShow: true,


        }));

    }

}
