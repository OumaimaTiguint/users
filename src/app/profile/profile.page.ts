import { UsersService } from './../services/users.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadedUser: Observable<any>
  user;
  firstName: string;
  lastName: string;
  email: string;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return;
      }
      const userId = paramMap.get('id');
      this.loadedUser = this.usersService.getUserById(userId);
    });
  this.loadedUser.subscribe(value => {
    const {firstName, lastName, email} = value;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email
  })
  console.log(this.user)
}
}
