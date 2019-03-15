import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  error = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.error = '';
    this.userService.login(this.name);
    this.userService.createClient.subscribe(msg => {
      if (msg.data) {
        this.router.navigate(['chat']);
      } else {
        this.error = msg.error;
      }
    });
  }
}
