import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Machine } from 'src/app/shared/models/machine.model';
import { Vector3 } from 'three';

@Component({
  selector: 'app-digital-twin',
  templateUrl: './digital-twin.component.html',
  styleUrls: ['./digital-twin.component.scss']
})
export class DigitalTwinComponent implements OnInit {
  digitalTwin: any[] = [
  ]

  filteredList: any[] = [];
  constructor(private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getDigitalTwins().subscribe(res => {
      res.data.map((x: any) => {
        x.machine.modelPosition = this.convertToVector(x.machine.modelPosition);
        x.machine.modelScale = this.convertToVector(x.machine.modelScale);
        this.digitalTwin.push(x);
      });
      this.filteredList = this.digitalTwin;
    });
  }

  navigateTo(digitalTwin: any) {
    localStorage.setItem(digitalTwin._id, JSON.stringify(digitalTwin));
    this.router.navigateByUrl(`/digital-twin/${digitalTwin._id}`, { state: digitalTwin });
  }

  search(event: any) {
    const searchText = event.target.value;
    this.filteredList = this.digitalTwin.filter(x => {
      if (x.name.toLowerCase().includes(searchText)) {
        return x;
      }
      return;
    })
  }

  convertToVector(value: number[]) {
    return new Vector3(value[0], value[1], value[2])
  }

}
