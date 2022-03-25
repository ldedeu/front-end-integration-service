import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class MiddlewareService {

  private GET_ALL_ALERTS = "http://52.167.184.195:8000/";
  private GET_BY_SOURCE_ID = "http://52.167.184.195:8000/sourceid/?sourceid="

  constructor(
    private http : HttpClient
  ) {}

  getAllAlerts () {
    return this.http.get<any>(this.GET_ALL_ALERTS + `getall` , {})
  }

  getBySourceId(source_id:string){
    return this.http.get<any>(this.GET_BY_SOURCE_ID + source_id , {})
  }
}
