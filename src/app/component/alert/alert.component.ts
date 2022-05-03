import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [

      state('in', style({ opacity: 1 })),

      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),

      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ])
  ]

})

export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
      console.log(message)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}