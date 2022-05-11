import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "https://cryptic-falls-04173.herokuapp.com/api"
  // url = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  public getMachines(): Observable<any> {
    return this.http.get(this.url + "/machine");
  }

  public getMachineDetails(id: number): Observable<any> {
    return this.http.get(this.url + `/machine/${id}`);
  }

  public createDigitalTwin(data: any): Observable<any> {
    return this.http.post(this.url + "/digital-twin", data);
  }

  public getDigitalTwins(): Observable<any> {
    return this.http.get(this.url + "/digital-twin");
  }

  public getDigitalTwinDetails(id: number): Observable<any> {
    return this.http.get(this.url + `/digital-twin/${id}`);
  }

  public deletDigitalTwin(id: number): Observable<any> {
    return this.http.delete(this.url + `/digital-twin/${id}`);
  }

  public getTurbofanSensorData(id: string): Observable<any> {
    return this.http.get(this.url + `/digital-twin/turbofan/${id}`);
  }

  public getSensorList(name: string): Observable<any> {
    return this.http.get(this.url + `/digital-twin/sensordata/${name}`);
  }

  public rulPredict(sensorData: Object): Observable<any> {
    return this.http.post(`https://floating-plateau-32825.herokuapp.com/predict`, sensorData);
  }

}
