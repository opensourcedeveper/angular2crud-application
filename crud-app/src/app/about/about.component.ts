import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  fetchData : string;

  constructor(private _fetchdataservice: FetchDataService) { }

  ngOnInit() {
    //  this.fetchData = this._fetchdataservice.getData();
    this._fetchdataservice.getData()
      .subscribe(resfetchData => this.fetchData = resfetchData);
  }

}
