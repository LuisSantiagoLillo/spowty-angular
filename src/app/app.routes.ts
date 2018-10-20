import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';
import { AlbumPanelComponent } from './pages/album-panel/album-panel.component';
import { ArtistPanelComponent } from './pages/artist-panel/artist-panel.component';


// DEFINE THE ROUTES APP
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'spowty', component: MusicPanelComponent},
    {path: 'spowty/:id', component: MusicPanelComponent},
    {path: 'album/:id', component: AlbumPanelComponent},
    {path: 'artist/:id', component: ArtistPanelComponent},
    // Default routes
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent}
];