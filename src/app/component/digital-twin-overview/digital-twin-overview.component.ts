import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SceneService } from 'src/app/services/scene.service';
import { Machine } from 'src/app/shared/models/machine.model';

@Component({
  selector: 'app-digital-twin-overview',
  templateUrl: './digital-twin-overview.component.html',
  styleUrls: ['./digital-twin-overview.component.scss']
})
export class DigitalTwinOverviewComponent implements OnInit {
  digitalTwinId: string = "";

  digitalTwin : any = null;
  
  constructor(
    @Inject(SceneService) private scene: SceneService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(res => {
      this.digitalTwinId = res["id"];
    })
    this.digitalTwin = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(this.digitalTwinId))));
    console.log("m",this.digitalTwin)
  }

  ngOnInit(): void {
    console.log(this.digitalTwin)
    }

  isNotTurbofan(){
    return this.digitalTwin.machine.machineType !="Turbofan Engine" ? true : false ;
  }

  @ViewChild('container')
  set container(container: ElementRef) {
    const digitalTwin: any = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem(this.digitalTwinId))))
    console.log(digitalTwin)
    this.scene.initialize(container.nativeElement, digitalTwin.machine);
  }
  
}
