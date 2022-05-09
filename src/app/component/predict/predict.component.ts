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
    ];

    this.isLatestData = true;
    this.lastUpdatedTime = new Date(Date.now());
  }

}

export interface TrainData {
  name: string;
  value: number
}
