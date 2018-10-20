import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { load } from '@angular/core/src/render3/instructions';
import { RouterModule, Router } from '@angular/router';
import { SpotifyAPIService } from '../../services/spotify-api.service';

@Component({
  selector: 'app-artist-panel',
  templateUrl: './artist-panel.component.html',
  styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

  data: any[] = [];
  tracks: any[] = [];
  albums: any[] = [];
  albumsORtracks = true;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _spotifyService: SpotifyAPIService
  ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log('ARTIST: ', params.id);
      this.getDatos(params.id);

    });
  }

  async getDatos(id) {
    await this._spotifyService.obtenerArtistaporID(id)
    .subscribe((resp: any) => {
      // console.log(resp);
      this.data = resp;
    });

    await this._spotifyService.getArtistAlbums(id)
    .subscribe((resp: any) => {
      // console.log(resp.items);
      this.albums = resp.items;
    });

    await this._spotifyService.getArtistTracks(id)
    .subscribe((resp: any) => {
      // console.log('TRACKS', resp.tracks);
      this.tracks = resp.tracks;
    });

    this.loading = false;
  }


  changeAlbum_Track(type) {
      if (type === 'albums') {
        this.albumsORtracks = true;
        document.getElementById('link_albums').classList.toggle('active');
        document.getElementById('link_tracks').classList.toggle('active');
      } else {
        this.albumsORtracks = false;
        document.getElementById('link_albums').classList.toggle('active');
        document.getElementById('link_tracks').classList.toggle('active');
      }
  }

  ngOnInit() {
  }

  searchAlbum(id: string): void {
    this.router.navigate(['/album', id]);
}
}
