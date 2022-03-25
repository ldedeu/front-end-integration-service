import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HermesService {

  private GET_ALL_ALERTS = environment.azure_endpoint;
  private GET_BY_SOURCE_ID = `${this.GET_ALL_ALERTS}/?sourceid=`;
  private GET_ERRORS = `${this.GET_ALL_ALERTS}/?errors=true`;

  constructor(
    private http : HttpClient
  ) {}

  getAllAlerts () {
    return this.http.get<any>(this.GET_ALL_ALERTS , {});
  }

  getBySourceId(source_id:string){
    return this.http.get<any>(this.GET_BY_SOURCE_ID + source_id , {});
  }

  getErrors () {
    return this.http.get<any>(this.GET_ERRORS , {});
  }
}
