import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'
@Injectable()
export class FetchDataService {


  // private _url: string = "http://all-interview-questions.com/V1/Api/fetchAboutus/";
  private _url: string = "https://jsonplaceholder.typicode.com/posts/2";
  private _url1: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http: Http) { }

  getData() {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }


  getDataList() {
    return this._http.get(this._url1)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }
  _errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'server error');

  }

}
