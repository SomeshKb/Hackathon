import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneService } from 'src/app/service/scene.service';
import { Machine } from 'src/app/shared/models/machine.model';
@Component({
  selector: 'app-create-digital-twin',
  templateUrl: './create-digital-twin.component.html',
  styleUrls: ['./create-digital-twin.component.scss']
})
export class CreateDigitalTwinComponent implements OnInit {

  machineId: string = "";

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
}
