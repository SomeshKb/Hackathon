import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getMachines() : Observable<any>{
    return this.http.get("/machine");
  }

  public getMachineDetails(id:number) : Observable<any>{
    return this.http.get(`/machine/${id}`);
  }

  public createDigitalTwin(data : any) : Observable<any>{
    return this.http.post("/digital-twin",data);
  }

  public getDigitalTwins() : Observable<any>{
    return this.http.get("/digital-twin");
  }

  public getDigitalTwinDetails(id:number) : Observable<any>{
    return this.http.get(`/digital-twin/${id}`);
  }
}
