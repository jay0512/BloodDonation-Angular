import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-' ];
  data = {};
  constructor() { }

  ngOnInit() {
  }
  /*getData(let x ) {
    this.data = x;
  }*/
}
