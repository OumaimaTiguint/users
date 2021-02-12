import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  constructor(
    private usersService: UsersService,
    private router: Router) { }

  onSubmit() {
    const { firstName, lastName, email } = this
    this.usersService.createUser(firstName, lastName, email)
    .subscribe(response => {
      console.log(response)
      this.router.navigate(["/tabs/tab1"])
    }, error => {
      console.log({ error })
    })
  }
  
  ngOnInit() {}
}
