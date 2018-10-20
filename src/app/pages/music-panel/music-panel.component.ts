import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.css']
})
export class MusicPanelComponent implements OnInit {

  @Input() busqueda;
  type = false;
  data: any[] = [];
  errorService: any[] = [];

  constructor(
    private _spotifyService: SpotifyAPIService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.activatedRoute.params.subscribe( params => {
        // console.log('SEARCH: ', params.id);
        this.requestInfo(params.id);
});
    }

  ngOnInit() {
  }


  searchArtist(id: string): void {
    this.router.navigate(['/artist', id]);
  }

  searchAlbum(id: string): void {
    this.router.navigate(['/album', id]);
}

requestInfo(elemento_buscado) {
  if (elemento_buscado === undefined) {
    this.type = true;
    this._spotifyService.obtenerNuevosExitos()
    .subscribe((resp: any) => {
      // console.log(resp);
      this.data = resp.albums.items;
    }, (errorService) => {
      // console.log(errorService);
      this.errorService = errorService;
      // ES CLAVE POR SI RECARGAN DESDE SPOWTY
      this.requestInfo(elemento_buscado);
    });

  } else {
    this.type = false;
    this._spotifyService.obtenerArtistaBuscado(elemento_buscado)
    .subscribe((resp: any) => {
      // console.log(resp);
      this.data = resp.artists.items;

    }, (errorService) => {
      // console.log(errorService);
      this.errorService = errorService;
    });
 }
}

}
