import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-get-card',
  templateUrl: './get-card.component.html',
  styleUrls: ['./get-card.component.css']
})
export class GetCardComponent implements OnInit {

  @Input() user: User;  
  @Output() userToAlert = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  generateAlert(value: User){
    this.userToAlert.emit(value);
  }

}

