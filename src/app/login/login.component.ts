import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserNameService } from '../services/user-name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public chkLogin = true;
  username: string;
  constructor(private router: Router , private data: UserNameService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.username = message);
  }
  loginCheck(a, b) {
    console.log(a);
    if ( a === 'user1' && b === 'user1') {
      // this.data.setUsername(a);
      sessionStorage.setItem('user', a);
      sessionStorage.setItem('IsLogin', 'true');
      this.router.navigate(['/home']);
      } else {
      this.chkLogin = false;
    }
  }
}
