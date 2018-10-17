import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../services/temp-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  data = {};
  constructor(public dataService: TempDataService) { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    console.log('in register');
    event.preventDefault();
    console.log( form.value);
    console.log('done');
    this.dataService.registerUser(form.value).subscribe(data => {
      console.log(data);
    });
  }
  /*getData(let x ) {
    this.data = x;
  }*/
}
