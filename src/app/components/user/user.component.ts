import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { Location } from '@angular/common';
//Graphical Charts
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInformation: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = ["Followers", ["Following"]];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(public _gh: GithubService,
    private route: ActivatedRoute,
    private _location: Location) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    const nameUser = this.route.snapshot.paramMap.get('name');
    console.log("nameUser url ", nameUser)
    if (nameUser) {
      console.log(nameUser);
      this._gh.getGithubOnlyUser(nameUser)
        .subscribe(resp => {
          console.log("la search es: =>", resp);
          this.userInformation = resp;
          this.pieChartData.push(resp['followers'], resp['following'])
          console.log(this.pieChartData)
        });
    }
  }

  back() {
    this._location.back();
  }


}
