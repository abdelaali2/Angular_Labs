import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Shared_Classes_&_types/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  usersEndpointURL: string = 'https://jsonplaceholder.typicode.com/users';
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersEndpointURL);
  }
}
