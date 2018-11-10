import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
    public _userService: UserProfileService
  ) { }

  ngOnInit() {
  }

  loginSpowty( proveedor: string ) {
    console.log( proveedor );
    if (proveedor === 'google') {
      this._userService.googleLogin();
    }
  }

}
