// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ROUTES
import { ROUTES } from './app.routes';

// SERVICES - PROVIDERS

// PIPES
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TimeTrackPipe } from './pipes/time-track.pipe';

// PAGES
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DomsecurePipe,
    NoimagePipe,
    TimeTrackPipe,
    HomeComponent,
    NavbarComponent,
    MusicPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
