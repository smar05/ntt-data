import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IRegister } from '../interface/i-register';
import { Observable } from 'rxjs';
import { ILogin } from '../interface/i-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = '/auth';

  constructor(private httpService: HttpService) {}

  /**
   * Registro
   *
   * @param {IRegister} body
   * @return {*}  {Observable<any>}
   * @memberof LoginService
   */
  public register(body: IRegister): Observable<any> {
    return this.httpService.post(`${this.url}/register`, body);
  }

  /**
   * Login
   *
   * @param {ILogin} body
   * @return {*}  {Observable<any>}
   * @memberof LoginService
   */
  public login(body: ILogin): Observable<any> {
    return this.httpService.post(`${this.url}/login`, body);
  }
}
