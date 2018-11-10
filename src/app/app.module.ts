// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Angular Form
// ** Modules Angular Fire 2
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// **************************
import { environment } from '../environments/environment';

// ANGULAR 7
import {ScrollingModule} from '@angular/cdk/scrolling';

// ROUTES
import { ROUTES } from './app.routes';

// SERVICES - PROVIDERS
import { ListService } from 'src/app/services/list.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { ChatService } from 'src/app/services/chat.service';
import { AuthGuardService } from '../app/services/auth-guard.service';
import { ReportIssuesService } from './services/report-issues.service';

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
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ReportProblemsComponent } from './pages/report-problems/report-problems.component';
import { FireChatComponent } from './pages/fire-chat/fire-chat.component';

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
import { LoginComponent } from './components/login/login.component';


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
    ConfigurationsComponent,
    ReportProblemsComponent,
    FireChatComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    ScrollingModule, // ANGULAR 7
    AngularFireModule.initializeApp(environment.firebase), // Angular Fire 2
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ListService,
    UserProfileService,
    ReportIssuesService,
    ChatService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
