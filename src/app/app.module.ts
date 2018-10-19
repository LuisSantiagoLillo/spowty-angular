import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TimeTrackPipe } from './pipes/time-track.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomsecurePipe,
    NoimagePipe,
    TimeTrackPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
