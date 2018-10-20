import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { SpotifyAPIService } from '../../services/spotify-api.service';

@Component({
  selector: 'app-album-panel',
  templateUrl: './album-panel.component.html',
  styleUrls: ['./album-panel.component.css']
})
export class AlbumPanelComponent implements OnInit {

  album;
  tracks;
  loading = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyAPIService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log('ALBUM: ', params.id);
      this.getDatos(params.id);
     });
  }

  async getDatos(id) {
    await this._spotifyService.getAlbumInfo(id)
    .subscribe((resp: any) => {
      console.log(resp);
      this.tracks = resp.tracks.items;
      this.album = resp;
      // console.log(this.tracks);
    });

    this.loading = false;

  }

  searchArtist(id: string): void {
    this.router.navigate(['/artist', id]);
  }


  ngOnInit() {
  }

}
