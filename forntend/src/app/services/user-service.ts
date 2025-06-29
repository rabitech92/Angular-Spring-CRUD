import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private url = `http://localhost:8080/api`;

  constructor(private http : HttpClient) { }
}
