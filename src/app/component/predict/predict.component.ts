import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  @Input('digitalTwin') digitalTwin: any;

  trainData: TrainData[] = [];
  isLatestData: boolean = false;
  lastUpdatedTime: Date | null = null;
  displayedColumns: string[] = ['name', 'value'];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    console.log(this.digitalTwin)
  }

  train() {
    this.alertService.info("Please wait, computation in progress...", 3, true)
  }

  getLatestData() {
    this.trainData = [
      { name: "Sensor1", value: 0.43 },
      { name: "Sensor2", value: 0.67 },
      { name: "Sensor3", value: 0.25 },
      { name: "Sensor5", value: 0.23 },
      { name: "Sensor6", value: 0.25 },
      { name: "Sensor7", value: 0.20 },
      { name: "Sensor8", value: 0.43 },
      { name: "Sensor9", value: 0.67 },
      { name: "Sensor13", value: 0.25 },
      { name: "Sensor15", value: 0.23 },
      { name: "Sensor19", value: 0.25 },
      { name: "Sensor17", value: 0.20 },
      { name: "Sensor1", value: 0.43 },
      { name: "Sensor2", value: 0.67 },
      { name: "Sensor3", value: 0.25 },
      { name: "Sensor5", value: 0.23 },
      { name: "Sensor6", value: 0.25 },
      { name: "Sensor7", value: 0.20 },
      { name: "Sensor8", value: 0.43 },
      { name: "Sensor9", value: 0.67 },
      { name: "Sensor13", value: 0.25 },
      { name: "Sensor15", value: 0.23 },
      { name: "Sensor19", value: 0.25 },
      { name: "Sensor17", value: 0.20 }
    ];

    this.isLatestData = true;
    this.lastUpdatedTime = new Date(Date.now());
  }

}

export interface TrainData {
  name: string;
  value: number
}
