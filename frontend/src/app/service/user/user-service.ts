import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../model/user/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Create
  createUser(userInfo: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.apiUrl}/save`, userInfo);
  }
}
