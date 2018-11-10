import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';
import { RouterModule, Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private _spotifyAPI: SpotifyAPIService,
    public _userService: UserProfileService
    ) {
  }

  ngOnInit() {
  }

  search(busqueda: string): void {
    this.router.navigate(['/spowty', busqueda]);
}

}
