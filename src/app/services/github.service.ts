import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private urlGitHub: string = "https://api.github.com";

  headers = {
    "Authorization": "token "
  }

  constructor(private http: HttpClient) { }

  getGithubUsers() {

    const URL = `${this.urlGitHub}/users`;

    return this.http.get(URL, {
      headers: this.headers
    })
      .pipe(
        map(resp => resp),
        take(5)
      );
  };


  getGithubSearchUser(ghName: string) {
    const URL = `${this.urlGitHub}/search/users?q=${ghName}`;
    return this.http.get(URL)
      .pipe(
        map(resp => resp),
      );
  };

  getGithubOnlyUser(ghName: string) {
    const URL = `${this.urlGitHub}/users/${ghName}`;
    return this.http.get(URL)
      .pipe(
        map(resp => resp)
      );
  };

}
