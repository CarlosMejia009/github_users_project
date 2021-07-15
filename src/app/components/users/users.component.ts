import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  githubUsersArray: any[] = [];
  dataUrls: any[] = [];

  constructor(public _gh: GithubService,
    private _route: Router) {

    setTimeout(() => {
      this._gh.getGithubUsers()
        .subscribe(async (dataAllUser: any[]) => {
          console.log("dataAllUser", dataAllUser)
          for (const dataUrl of dataAllUser) {
            const dataUserUrl = dataUrl['url'];
            this.dataUrls.push(dataUserUrl);
          };
          Promise.all(this.dataUrls.map(url => fetch(url))).then(responses =>
            Promise.all(responses.map(res => res.json()))
          ).then(dataUser => {
            console.log(dataUser)
            this.githubUsersArray.push(...dataUser);
          })
        }, (err => { 
          console.error(err);
        }));
    }, 1000);


  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  verArtista() {
    console.log("artista clic");
  }

  routing(peli) {
    this._route.navigate(['/pelicula'], peli);
  }

  onClick() {
    console.log("pruebaaaa");
  }





}
