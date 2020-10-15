import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-get-card',
  templateUrl: './get-card.component.html',
  styleUrls: ['./get-card.component.css']
})
export class GetCardComponent implements OnInit {

  @Input() users: any;  

  constructor() { }

  ngOnInit(): void {
  }

  private showAlert(user: User){
    alert(user.name + ' ' + user.lastName);
  }
}

