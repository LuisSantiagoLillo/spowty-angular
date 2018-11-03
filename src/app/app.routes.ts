import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';
import { AlbumPanelComponent } from './pages/album-panel/album-panel.component';
import { ArtistPanelComponent } from './pages/artist-panel/artist-panel.component';
import { ListPanelComponent } from './pages/list-panel/list-panel.component';
import { ItemsListComponent } from './pages/list-panel/items-list/items-list.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ReportProblemsComponent } from './pages/report-problems/report-problems.component';


// DEFINE THE ROUTES APP
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'spowty', component: MusicPanelComponent},
    {path: 'spowty/:id', component: MusicPanelComponent},
    {path: 'album/:id', component: AlbumPanelComponent},
    {path: 'artist/:id', component: ArtistPanelComponent},
    {path: 'panel-list', component: ListPanelComponent,
        children: [
            {path: '', component: ItemsListComponent},
            {path: ':id', component: ItemsListComponent}
        ]
    },
    {path: 'configurations', component: ConfigurationsComponent},
    {path: 'report', component: ReportProblemsComponent},


    // Default routes
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent}
];