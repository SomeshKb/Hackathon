import { Component, Input, OnInit } from '@angular/core';
import { TrainData } from '../component/predict/predict.component';
import { AlertService } from '../services/alert.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-simulate-predict',
  templateUrl: './simulate-predict.component.html',
  styleUrls: ['./simulate-predict.component.scss']
})
export class SimulatePredictComponent implements OnInit {

  @Input('digitalTwin') digitalTwin: any;

  trainData: TrainData[] = [];
  isLatestData: boolean = false;
  lastUpdatedTime: Date | null = null;
  displayedColumns: string[] = ['name', 'value'];

  rul = null;
  max = 10000;
  min = 0;
  step = 0.1;

  sensorDetails =
    {
      "sensor2": "Total temperature at LPC outlet (°R)",
      "sensor3": "Total temperature at HPC outlet (°R)",
      "sensor4": "Total temperature at LPT outlet (°R)",
      "sensor7": "Total pressure at HPC outlet (psia)",
      "sensor8": "Physical fan speed (rpm)",
      "sensor9": "Physical core speed (rpm)",
      "sensor11": "Static pressure at HPC outlet (psia)",
      "sensor12": "Ratio of fuel flow to Ps30 (pps/psi)",
      "sensor13": "Corrected fan speed (rpm)",
      "sensor14": "Corrected core speed (rpm)",
      "sensor15": "Bypass Ratio",
      "sensor17": "Bleed Enthalpy",
      "sensor20": "HPT coolant bleed (lbm/s)",
      "sensor21": "LPT coolant bleed (lbm/s)",
    }

  sensor2: number = 677.08;
  sensor3: number = 1576.65;
  sensor4: number = 1400.31;
  sensor7: number = 509.35;
  sensor8: number = 2376.09;
  sensor9: number = 9046.1;
  sensor11: number = 47.34;
  sensor12: number = 521.82;
  sensor13: number = 2381.02;
  sensor14: number = 8125.24;
  sensor15: number = 8.4494;
  sensor17: number = 393;
  sensor20: number = 34.87;
  sensor21: number = 29.3931;

  pSensor2: number = 677.08;
  pSensor3: number = 1576.65;
  pSensor4: number = 1400.31;
  pSensor7: number = 509.35;
  pSensor8: number = 2376.09;
  pSensor9: number = 9046.1;
  pSensor11: number = 47.34;
  pSensor12: number = 521.82;
  pSensor13: number = 2381.02;
  pSensor14: number = 8125.24;
  pSensor15: number = 8.4494;
  pSensor17: number = 393;
  pSensor20: number = 34.87;
  pSensor21: number = 29.3931;

  constructor(private alertService: AlertService, private httpService: HttpService) { }

  ngOnInit(): void {
    console.log(this.digitalTwin)
  }

  train() {
    const data = {
      "sensor2": this.sensor2,
      "sensor3": this.sensor3,
      "sensor4": this.sensor4,
      "sensor7": this.sensor7,
      "sensor8": this.sensor8,
      "sensor9": this.sensor9,
      "sensor11": this.sensor11,
      "sensor12": this.sensor12,
      "sensor13": this.sensor13,
      "sensor14": this.sensor14,
      "sensor15": this.sensor15,
      "sensor17": this.sensor17,
      "sensor20": this.sensor20,
      "sensor21": this.sensor21,
    }

    this.httpService.rulPredict(data).subscribe(res => {
      this.rul = res.data;
    })
  }

  getLatestData() {
    this.trainData = [
    ];

    this.isLatestData = true;
    this.lastUpdatedTime = new Date(Date.now());
  }

}
