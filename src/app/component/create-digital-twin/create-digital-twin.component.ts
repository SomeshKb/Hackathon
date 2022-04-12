import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-digital-twin',
  templateUrl: './create-digital-twin.component.html',
  styleUrls: ['./create-digital-twin.component.scss']
})
export class CreateDigitalTwinComponent implements OnInit {

  devices = [
    "Device1",
    "Device1",
    "Device1",
    "Device1",
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
