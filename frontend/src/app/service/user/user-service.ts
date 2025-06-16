import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/save';

  constructor(private http: HttpClient) { }

  save(user : User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/save`,user)
  }
}
