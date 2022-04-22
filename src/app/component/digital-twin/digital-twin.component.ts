import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/shared/models/machine.model';
import { Vector3 } from 'three';

@Component({
  selector: 'app-digital-twin',
  templateUrl: './digital-twin.component.html',
  styleUrls: ['./digital-twin.component.scss']
})
export class DigitalTwinComponent implements OnInit {
  machineList : Machine[] = [
    {
      id: "kuka",
      name: "KukaRobot",
      imageUrl: "../../../assets/images/kuka.png",
      modelUrl: "../../assets/3dmodels/kuka.glb",
      modelPosition: new Vector3(0, -1, 0),
      modelScale: new Vector3(0.01, 0.01, 0.01)
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(machine: Machine) {
    localStorage.setItem(machine.id, JSON.stringify(machine));
    this.router.navigateByUrl(`/digital-twin/${machine.id}`);
  }

}
