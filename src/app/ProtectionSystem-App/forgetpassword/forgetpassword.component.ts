import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
