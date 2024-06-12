import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IRegister } from '../interface/i-register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = '/auth';

  constructor(private httpService: HttpService) {}

  public register(body: IRegister): Observable<any> {
    return this.httpService.post(`${this.url}/register`, body);
  }
}
