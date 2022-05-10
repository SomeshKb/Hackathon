import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input('digitalTwin') digitalTwin: any;
  selectedSensorData: any[] = [];
  chartData: any = {}

  sensors: Sensor[] = [
  ]

  constructor(public httpService: HttpService) {

  }


  ngOnInit(): void {
    this.getSensorList();
  }

  getSensorSelection(value: any) {
    this.getSensorData(value);
  }

  getSensorList() {
    this.httpService.getSensorList(this.digitalTwin?.machine?.name).subscribe(res => {
      this.sensors = res.data[0].sensor;
    });
  }

  getSensorData(sensor: any) {
    this.httpService.getTurbofanSensorData(sensor.value).subscribe(res => {
      this.selectedSensorData = res.data;
      const seriesData: any[] = []
      const cycleTimelineData: any[] = []
      this.selectedSensorData.map((x,index) => {
        seriesData.push(x[sensor.value])
        cycleTimelineData.push(index+1);
      });

      this.chartData = {
        "name": sensor.name,
        "series": seriesData,
        "timeLine": cycleTimelineData
      }
    });
  }

}

interface Sensor {
  name: string,
  value: number
}
