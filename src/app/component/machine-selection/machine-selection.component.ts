import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Machine } from 'src/app/shared/models/machine.model';
import { Vector3 } from 'three';

@Component({
  selector: 'app-machine-selection',
  templateUrl: './machine-selection.component.html',
  styleUrls: ['./machine-selection.component.scss']
})
export class MachineSelectionComponent implements OnInit {

  machineList: Machine[] = []
  filteredList: Machine[] = []

  constructor(private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.machineList = []

    this.httpService.getMachines().subscribe(res => {
      res.data.map((x: any) => {
        x.modelPosition = this.convertToVector(x.modelPosition);
        x.modelScale = this.convertToVector(x.modelScale);
        this.machineList.push(x);
      });
      this.filteredList = this.machineList;

      console.log(this.machineList)
    });
  }

  navigateTo(machine: Machine) {
    localStorage.setItem(machine._id, JSON.stringify(machine));
    this.router.navigateByUrl(`/create/${machine._id}`);
  }

  search(event: any) {
    const searchText = event.target.value;
    this.filteredList = this.machineList.filter(x => {
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
