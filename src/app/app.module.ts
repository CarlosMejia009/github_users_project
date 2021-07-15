import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

//Forms
import { FormsModule } from '@angular/forms';

//rutas
import { AppRoutingModule } from "./app-routing.module";

//Servicios
import { GithubService } from './services/github.service';

//Componentes
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';

//bootstrap
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SearchComponent } from './components/search/search.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SearchByUserComponent } from './components/search-by-user/search-by-user.component';

//Chars
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    UserComponent,
    SearchComponent,
    SearchUserComponent,
    SearchByUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
