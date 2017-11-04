import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
@Component({
  selector: 'app-uselist',
  templateUrl: './uselist.component.html',
  styleUrls: ['./uselist.component.css']
})
export class UselistComponent implements OnInit {

  fetchData = [];

  constructor(private _fetchdataservice: FetchDataService) { }

  ngOnInit() {
    //  this.fetchData = this._fetchdataservice.getData();
    this._fetchdataservice.getDataList()
      .subscribe(resfetchData => this.fetchData = resfetchData);
  }
}
