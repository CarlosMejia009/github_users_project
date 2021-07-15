import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  findUser: string;
  arrayGhUsers: any[];
  arrayData: any[] = []

  constructor(public _gh: GithubService) { }

  ngOnInit(): void {
  }


  searchGh() {
    console.log("entro")
    if (this.findUser != null || undefined) {
      this._gh.getGithubSearchUser(this.findUser)
        .subscribe((resp: any[]) => {
          console.log(resp)
          this.arrayGhUsers = [];
          this.arrayData = [];
          this.arrayData.push(...resp['items'])
          this.arrayGhUsers = this.arrayData.slice(0, 10);
        });
    };
  };



}


