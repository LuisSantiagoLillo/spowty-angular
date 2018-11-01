// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// ANGULAR 7
import {ScrollingModule} from '@angular/cdk/scrolling';

// ROUTES
import { ROUTES } from './app.routes';

// SERVICES - PROVIDERS
import { ListService } from 'src/app/services/list.service';

// PIPES
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TimeTrackPipe } from './pipes/time-track.pipe';

// PAGES
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';
import { AlbumPanelComponent } from './pages/album-panel/album-panel.component';
import { ArtistPanelComponent } from './pages/artist-panel/artist-panel.component';
import { ListPanelComponent } from './pages/list-panel/list-panel.component';

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchPanelComponent } from './pages/search-panel/search-panel.component';
import { ErrorComponent } from './components/error/error.component';
import { SongIframeComponent } from './components/iframeComponents/song-iframe/song-iframe.component';
import { ResponsiveAudioPlayerComponent } from './components/iframeComponents/responsive-audio-player/responsive-audio-player.component';
import { CommonErrorComponent } from './components/errorComponents/common-error/common-error.component';
import { AudioPlayerComponent } from './components/iframeComponents/audio-player/audio-player.component';
import { ItemsListComponent } from './pages/list-panel/items-list/items-list.component';
import { ItemlistIframeComponent } from './components/iframeComponents/itemlist-iframe/itemlist-iframe.component';


@NgModule({
  declarations: [
    AppComponent,
    DomsecurePipe,
    NoimagePipe,
    TimeTrackPipe,
    HomeComponent,
    NavbarComponent,
    MusicPanelComponent,
    AlbumPanelComponent,
    ArtistPanelComponent,
    LoadingComponent,
    SearchPanelComponent,
    ErrorComponent,
    ListPanelComponent,
    SongIframeComponent,
    ResponsiveAudioPlayerComponent,
    CommonErrorComponent,
    AudioPlayerComponent,
    ItemsListComponent,
    ItemlistIframeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    // ANGULAR 7
    ScrollingModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
