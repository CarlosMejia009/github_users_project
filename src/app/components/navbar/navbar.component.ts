import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search: string;
  searchEnvio: string;

  constructor(private _rt: Router) { }

  ngOnInit(): void {
  }

  searchUser() {
    if (this.search != undefined && this.search.length > 0) {
      if (this.search.trim() != "") {
        this.searchEnvio = this.search;
        this._rt.navigate([`search/${this.searchEnvio}`])
        this.search = "";
      }
    }
  }

}
