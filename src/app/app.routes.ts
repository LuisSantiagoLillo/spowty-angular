import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';


// DEFINE THE ROUTES APP
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'spowty', component: MusicPanelComponent},
    // Default routes
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent}
];