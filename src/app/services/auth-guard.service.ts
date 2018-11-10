import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _userService: UserProfileService,
    private router: Router
  ) { }

  canActivate() {
    if (this._userService.userlogged) {
      return true;
    } else {
      return false;
    }
  }
}
