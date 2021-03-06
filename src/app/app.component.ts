import { Component }                                                   from '@angular/core';
import { NgxuxMatVerticalToolbarItem, NgxuxMatVerticalToolbarService } from '@ngxux/ngxux-mat-vertical-toolbar';
import { AuthenticationService }                                       from './_lib/AuthenticationService';

@Component({

    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]

})
export class AppComponent {

    public constructor(private ngxuxMatVerticalToolbarService: NgxuxMatVerticalToolbarService,
                       public authenticationService: AuthenticationService) {

        ngxuxMatVerticalToolbarService.leftMenuItems = [

            new NgxuxMatVerticalToolbarItem({ icon: 'home', path: '/home' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'supervised_user_circle', path: '/users' }),
            new NgxuxMatVerticalToolbarItem({ icon: 'settings', path: '/settings' }),

        ];

    }

}
