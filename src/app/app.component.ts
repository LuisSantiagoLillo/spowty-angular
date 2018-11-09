import { Component } from '@angular/core';
import { SpotifyAPIService } from './services/spotify-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spowty';

  constructor(
    _spowtyAPI: SpotifyAPIService
    ) {
    // Instance the SpotifyAPI Service to get the TOKEN and stored in the Service
  }



}
