import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() userName;
  @Input() password;

  

  ngOnInit() {
  }

  send(userName, password){
      
  }
}