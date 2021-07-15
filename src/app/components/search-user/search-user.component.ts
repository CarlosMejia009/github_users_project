import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @Input() user: string;

  userInformation: any;
  searchMovie: any;

  constructor(public _gh: GithubService,
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router) { }


  ngOnInit(): void {
    const user = this.route.snapshot.paramMap.get('user');

    if (user) {
      this._gh.getGithubOnlyUser(user)
        .subscribe(resp => {
          console.log("resp search-user ", resp)
          this.userInformation = resp;
        });
    }

  }


  back() {
    if (this.searchMovie) {
      this.router.navigate([`search/${this.searchMovie}`]);
    }
    this._location.back();
  }

}
