import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SceneService } from 'src/app/services/scene.service';
import { Machine } from 'src/app/shared/models/machine.model';

@Component({
  selector: 'app-digital-twin-overview',
  templateUrl: './digital-twin-overview.component.html',
  styleUrls: ['./digital-twin-overview.component.scss']
})
export class DigitalTwinOverviewComponent implements OnInit {
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
