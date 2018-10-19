import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoundElementPropertyAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  // token is used in has_token
  private token;
  public hasToken = false;

  constructor(private http: HttpClient) {
    console.log('Spotify Service Activo');
    this.getTokenAPIspotify()
      .then(resp => {
        this.token = resp.access_token;
        this.hasToken = true;
        console.log('COnstructor: ', this.token);
      } );
  }

  /** REFRESH TOKEN SPOTIFY API */
  refreshTokenSpotify2() {
    this.getTokenAPIspotify()
      .then(resp => {
        this.token = resp.access_token;
        this.hasToken = true;
        console.log('COnstructor: ', this.token);
      } );
  }

  async refreshTokenSpotify() {
    let  flag = true;
    do {
      this.getTokenAPIspotify()
      .then(resp => {
        this.token = resp.access_token;
        this.hasToken = true;
        console.log('Constructor: ', this.token);
      } );

      flag = await this.stop();
    } while (!flag);
  }

  /*************************************************/

  async stop() {
    setTimeout( () => {
      console.log('Token Refresh');
    }, 10);
    return true;
  }

  /** TOKEN SPOTIFY */

  has_token(): boolean {
    if (this.token === undefined) {
      return false;
    } else {
      return true;
    }
  }

  async getTokenAPIspotify() {
   const client_id = 'f89e6054d88247e586320b0dde8418c8';
   const client_secret = 'a1e170a8912d446fa280dd15e171d8e9';
    // return this.http.get(`http://localhost:3000/spotify/${client_id}/${client_secret}`);
    // return this.http.get(`https://git.heroku.com/token-spotify.git/spotify/${client_id}/${client_secret}`);
    // return this.http.get(`https://spotify-get-token.herokuapp.com/spotify/${client_id}/${client_secret}`);
    // https://token-spotify.herokuapp.com/

    // const datos = await fetch(`https://spotify-get-token.herokuapp.com/spotify/${client_id}/${client_secret}`);
    const datos = await fetch(`https://token-spotify.herokuapp.com/spotify/${client_id}/${client_secret}`);
    return datos.json();
  }

  /**********************************************************/

  /** REQUEST INFO FROM SPOTIFY API */
  obtenerNuevosExitos() {
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        });
      const urlGetReleases =  `https://api.spotify.com/v1/browse/new-releases`;
      return this.http.get(`${urlGetReleases}?limit=20`, {headers});
  }

  obtenerArtistaBuscado(artista: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(artista);
    return this.http.get(`https://api.spotify.com/v1/search?query=${ artista }&type=track,artist`, {headers});

    // return this.http.get(`https://api.spotify.com/v1/search?query=ed+she&type=artist`, {headers});

    //return this.http.get(`https://api.spotify.com/v1/artists/${ artista }`, {headers});
  }

  obtenerArtistaporID(id: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(id);
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers});

  }

  getArtistTracks(id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(id);
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=ES`, {headers});
  }

  getArtistAlbums(id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(id);
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/albums`, {headers});
  }

  getAlbumsTracks(id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(id);
    return this.http.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {headers});
  }

  getAlbumInfo(id: string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    // console.log(id);
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`, {headers});
}

/*******************************************************************************************/

}
