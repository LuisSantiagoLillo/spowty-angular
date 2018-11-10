import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicPanelComponent } from './pages/music-panel/music-panel.component';
import { AlbumPanelComponent } from './pages/album-panel/album-panel.component';
import { ArtistPanelComponent } from './pages/artist-panel/artist-panel.component';
import { ListPanelComponent } from './pages/list-panel/list-panel.component';
import { ItemsListComponent } from './pages/list-panel/items-list/items-list.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ReportProblemsComponent } from './pages/report-problems/report-problems.component';
import { FireChatComponent } from './pages/fire-chat/fire-chat.component';
import { AuthGuardService } from './services/auth-guard.service';


// DEFINE THE ROUTES APP
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'spowty', component: MusicPanelComponent, canActivate: [AuthGuardService]},
    {path: 'spowty/:id', component: MusicPanelComponent, canActivate: [AuthGuardService]},
    {path: 'album/:id', component: AlbumPanelComponent, canActivate: [AuthGuardService]},
    {path: 'artist/:id', component: ArtistPanelComponent, canActivate: [AuthGuardService]},
    {path: 'panel-list', component: ListPanelComponent, canActivate: [AuthGuardService],
        children: [
            {path: '', component: ItemsListComponent},
            {path: ':id', component: ItemsListComponent}
        ]
    },
    {path: 'configurations', component: ConfigurationsComponent, canActivate: [AuthGuardService]},
    {path: 'report', component: ReportProblemsComponent, canActivate: [AuthGuardService]},
    {path: 'chat', component: FireChatComponent, canActivate: [AuthGuardService]},

    // Default routes
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent}
];