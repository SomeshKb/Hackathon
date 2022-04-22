import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SceneService } from 'src/app/services/scene.service';
import { Machine } from 'src/app/shared/models/machine.model';
@Component({
  selector: 'app-create-digital-twin',
  templateUrl: './create-digital-twin.component.html',
  styleUrls: ['./create-digital-twin.component.scss']
})
export class CreateDigitalTwinComponent implements OnInit {

  machineId: string = "";

  connectionUrls = ["url1", "url2"]

  machines: any[] = []

  machineForm = new FormGroup({
    connectionUrl: new FormControl('', [Validators.required]),
    machineID: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(SceneService) private scene: SceneService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(res => {
      this.machineId = res["id"];
    })

  }

  ngOnInit(): void {
  }

  @ViewChild('container')
  set container(container: ElementRef) {
    const machine: Machine = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(this.machineId))))
    this.scene.initialize(container.nativeElement, machine);
  }

  createDigitalTwin() {
    console.log(this.machineForm.value)
  }

  connectionUrlChanged() {
    // console.log(this.machineForm.controls['machineID'].enable())
    this.machines = [
      { name: "test", id: 1 },
      { name: "test", id: 2 },
      { name: "test", id: 2 },
      { name: "test", id: 4 },
    ]
  }
}
