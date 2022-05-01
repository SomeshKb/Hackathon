import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-twin-setting',
  templateUrl: './twin-setting.component.html',
  styleUrls: ['./twin-setting.component.scss']
})
export class TwinSettingComponent implements OnInit {
  @Input('digitalTwin') digitalTwin: any

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  delete() {
    this.httpService.deletDigitalTwin(this.digitalTwin._id).subscribe((res: any) => {
      localStorage.removeItem(this.digitalTwin._id)
      this.router.navigateByUrl('digital-twin');
    });
  }
}
