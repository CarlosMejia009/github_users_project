import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search-by-user',
  templateUrl: './search-by-user.component.html',
  styleUrls: ['./search-by-user.component.css']
})
export class SearchByUserComponent implements OnInit {

  userSearch: string;
  search: any[] = [];
  user: any;


  constructor(public _gh: GithubService,
    private route: ActivatedRoute,
    private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.user = this.route.snapshot.url[1].path;
        if (this.user) {
          this.userSearch = this.user;
          this.searchUser();
        };
      };
    });

  }



  ngOnInit(): void {

  }

  searchUser() {
    // if (this.search != null || undefined) {
    //   this._gh.getGithubSearchUser(this.userSearch)
    //     .subscribe((resp: any[]) => {
    //       this.search = [];
    //       this.search.push(...resp['items']);
    //       console.log(this.search)
    //     });
    // }

    if (this.search != null || undefined) {
      this._gh.getGithubSearchUser(this.userSearch)
      .pipe(
        take(5)
      ).subscribe(data => {
        console.log("dataaaaaaaaaaaaaaaaaa", data)
      })
    }
  }
}
