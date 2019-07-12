import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import Swal from 'sweetalert2';


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
      Swal.fire({
        title: 'Please sign into your account to use the chat service.',
        type: 'error',
        confirmButtonText: 'Cool'
      })
      return false;
    }
  }
}
