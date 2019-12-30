import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserManagementService {

  constructor(private http: HttpClient) { }

  // AUTH API URLS

  baseUrl = 'https://reqres.in/'
  private static readonly LOGIN_URL = 'api/login';
  private static readonly REGISTER_URL = 'api/register';
  private static readonly USERS_URL = 'api/users';


  login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + UserManagementService.LOGIN_URL,
      {
        "email": email,
        "password": password
      });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + UserManagementService.REGISTER_URL,
      {
        "email": email,
        "password": password
      });
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + UserManagementService.USERS_URL);
  }

  getNextPage(page:number): Observable<any> {
    return this.http.get(this.baseUrl + UserManagementService.USERS_URL+ "?page=" + page);
  }

  getTeacher(): Observable<any> {
    return this.http.get(this.baseUrl + UserManagementService.USERS_URL + "/6");
  }
  

}
