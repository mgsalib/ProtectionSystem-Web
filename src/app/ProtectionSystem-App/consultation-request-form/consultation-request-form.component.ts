import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-consultation-request-form',
  templateUrl: './consultation-request-form.component.html',
  styleUrls: ['./consultation-request-form.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ConsultationRequestFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SendSuccess = false;

  OpenSuccessMsg() {
    this.SendSuccess = !this.SendSuccess;
  }
}
