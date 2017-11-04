import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FetchDataService } from './fetch-data.service';
import { UselistComponent } from './uselist/uselist.component';
// import { FetchListService } from './fetch-list.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    UselistComponent

  ],
  imports: [
    BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'userlist', component: UselistComponent }
    
     
    ])
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
