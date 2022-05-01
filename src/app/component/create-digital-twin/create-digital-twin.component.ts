import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SceneService } from 'src/app/services/scene.service';
import { Machine } from 'src/app/shared/models/machine.model';
@Component({
  selector: 'app-create-digital-twin',
  templateUrl: './create-digital-twin.component.html',
  styleUrls: ['./create-digital-twin.component.scss']
})
export class CreateDigitalTwinComponent implements OnInit {

  machineId: string = "";

  connectionUrls = ["192.162.78.21", "192.162.78.22"]
  mappedmachines: any[] = []
  machine: any

  machineForm = new FormGroup({
    connectionUrl: new FormControl('', [Validators.required]),
    mappedMachine: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(SceneService) private scene: SceneService,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {

    this.route.params.subscribe(res => {
      this.machineId = res["id"];
      this.machine = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(this.machineId))))

    })

  }

  ngOnInit(): void {
    this.httpService.getMachines().subscribe(res => {
      console.log(res);
    });
  }

  @ViewChild('container')
  set container(container: ElementRef) {
    const machine: Machine = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(this.machineId))))
    this.scene.initialize(container.nativeElement, machine);
  }

  createDigitalTwin() {
    const formData = this.machineForm.value
    const requestBody = {
      "machineId": this.machineId,
      "name": formData.name,
      "connectionUrl": formData.connectionUrl,
      "mappedMachine": formData.mappedMachine
    }
    console.log(this.machineForm.value)
    console.log(requestBody)

    this.httpService.createDigitalTwin(requestBody).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/digital-twin")
    });

  }

  connectionUrlChanged() {
    // console.log(this.machineForm.controls['machineID'].enable())
    this.mappedmachines = [
      { name: "Turbofan 45", id: 1 },
      { name: "Turbofan 56 ", id: 2 },
      { name: "Turbofan 34", id: 3 },
      { name: "Turbofan 33", id: 4 },
    ]
  }
}
