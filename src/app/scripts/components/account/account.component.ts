import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'account',
  templateUrl: '../../../views/account.component.html',
  styleUrls: ['../../../styles/account.component.css']
})
export class AccountComponent {
    private _socialAuthService: AuthService;

    private _showSigninPopup: boolean;

    constructor(socialAuthService: AuthService) {
        var self: AccountComponent = this;

        self._socialAuthService = socialAuthService;

        self._showSigninPopup = false;
    }

    public togglePopup(type: string): void {
        var self: AccountComponent = this;
        self._showSigninPopup = !self._showSigninPopup;
    }

    public signIn(socialPlatform : string): void {
        var self: AccountComponent = this;
        var socialPlatformProvider: string = socialPlatform === "facebook" ? FacebookLoginProvider.PROVIDER_ID : GoogleLoginProvider.PROVIDER_ID;
        
        self._socialAuthService.signIn(socialPlatformProvider).then(
          (userData) => {
            console.log(socialPlatform+" sign in data : " , userData);
          }
        );
      }
}
