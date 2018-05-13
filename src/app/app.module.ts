import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FetchApiService} from './fetch-api.service';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { BookComponent } from './book/book.component';
import { SortPipe } from './sort.pipe';
import { SelectPipe } from './select.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    CharacterComponent,
    BookComponent,
    SortPipe,
    SelectPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
  
    HttpModule,
    
    RouterModule,
    RouterModule.forRoot([
      {
        path:"app-home",
        component:HomeComponent
      },
  
    {
        path:"book/:booknumber",
        component:BookComponent
      },
      {
        path:"house/:housenumber",
        component:HouseComponent
      },
      {
        path:"character/:characternumber",
        component:CharacterComponent
      },
      {
        path:"",
        redirectTo:"app-home",
        pathMatch:"full"
      }
     

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
