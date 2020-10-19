import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: User;
  public flag: boolean = false;
  public usuario: User; 
  

  constructor(private _cardService: CardService, public router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  public getUsers(): void{
    this._cardService.sendGetRequest()
    .subscribe((res: any) => {
      this.users = res.response;
      this.flag = true;
    },
    err => {
      throw new Error(err)
    })
  }
  public showAlert(user: User){
    alert(user.name + ' ' + user.lastName);
  }
}
