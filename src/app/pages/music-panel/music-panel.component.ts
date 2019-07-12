import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
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
  lessIframe: boolean = screen.width <= 1200 && screen.width >= 570;

  loading: boolean = false;
  error: boolean = false;
  title: string = "Connection server error";
  message: string = "Service is not working.";
  color: string = "warning";

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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.lessIframe = screen.width <= 1200 && screen.width >= 570;

  }


  searchArtist(id: string): void {
    this.router.navigate(['/artist', id]);
  }

  searchAlbum(id: string): void {
    this.router.navigate(['/album', id]);
}

requestInfo(elemento_buscado) {
  this.loading = true;
  setTimeout(() => {
      if (elemento_buscado === undefined) {
        this.type = true;
        this._spotifyService.obtenerNuevosExitos()
        .subscribe((resp: any) => {
          // console.log(resp);
          this.data = resp.albums.items;
          this.loading = false;
          this.error = false;
        }, (errorService) => {
          this.loading = false;
          this.error = true;
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
          this.loading = false;
          this.error = false;
        }, (errorService) => {
          this.loading = false;
          this.error = true;
          // console.log(errorService);
          this.errorService = errorService;
        });
     }
  }, 2000);
}

}
