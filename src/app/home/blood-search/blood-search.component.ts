import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';

@Component({
  selector: 'app-blood-search',
  templateUrl: './blood-search.component.html',
  styleUrls: ['./blood-search.component.css']
})
export class BloodSearchComponent implements OnInit {
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+' , 'O-' ];
  Area = ['Sama', 'Karelibaug', 'Vastrapur', 'Vaniavad', 'Subhanpura', 'ChakliCircle', 'OProad' , 'Vastral' ];

  public Users = [] ;

  constructor( public dataService: TempDataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => this.Users = data) ;

  }
}
