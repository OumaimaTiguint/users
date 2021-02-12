import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users: Observable<any>
  constructor(private usersService: UsersService) {}

  ionViewWillEnter() {
    this.users = this.usersService.getUsers();
  }
}
