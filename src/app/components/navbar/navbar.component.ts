import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(_spotifyAPI: SpotifyAPIService) {
  }

  ngOnInit() {
  }

}
