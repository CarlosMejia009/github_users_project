import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SearchByUserComponent } from './components/search-by-user/search-by-user.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'users', component: UsersComponent },
    { path: 'user/:name', component: UserComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:name', component: SearchByUserComponent },
    // { path: 'seat/:id/buscar/:movie', component: SearchUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'users' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }