import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FetchDataService } from './fetch-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'services', component : ServicesComponent }  ])
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
