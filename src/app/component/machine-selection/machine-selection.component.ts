import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/shared/models/machine.model';
import { Vector3 } from 'three';

@Component({
  selector: 'app-machine-selection',
  templateUrl: './machine-selection.component.html',
  styleUrls: ['./machine-selection.component.scss']
})
export class MachineSelectionComponent implements OnInit {

  machineList: Machine[] = [
    {
      id: "kuka",
      name: "KukaRobot",
      imageUrl: "./assets/images/kuka.png",
      modelUrl: "./assets/3dmodels/kuka.glb",
      modelPosition: new Vector3(0, -1, 0),
      modelScale: new Vector3(0.01, 0.01, 0.01)
    },
    {
      id: "turbo",
      name: "Turbofan Engine",
      imageUrl: "./assets/images/turbo.png",
      modelUrl: "./assets/3dmodels/turbo.glb",
      modelPosition: new Vector3(0, 0, 0),
      modelScale: new Vector3(0.5, 0.5, 0.5)
    },
  ]
  filteredList: Machine[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredList = this.machineList;
  }

  navigateTo(machine: Machine) {
    localStorage.setItem(machine.id, JSON.stringify(machine));
    this.router.navigateByUrl(`/create/${machine.id}`);
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
}
