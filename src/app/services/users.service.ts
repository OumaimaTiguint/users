import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get("http://localhost:5000/")
  }

  createUser(firstName, lastName, email) {
    return this.httpClient.post("http://localhost:5000/add", {firstName, lastName, email})
  }

  getUserById(id:string) {
    return this.httpClient.get("http://localhost:5000/" + id)
  }
}
