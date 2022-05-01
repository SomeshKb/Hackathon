import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  @Input('digitalTwin') digitalTwin: any
  items = ['Train', 'Predict'];
  trainDateRange = new FormGroup({
    start: new FormControl("", [Validators.required]),
    end: new FormControl("", [Validators.required]),
  });
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor() { }

  ngOnInit(): void {
    console.log(this.digitalTwin)
  }

}
