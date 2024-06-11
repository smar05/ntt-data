import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private urlBack: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  /**
   * Metodo GET
   *
   * @param {string} url
   * @param {*} [params={}]
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  public get(url: string, params: any = {}): Observable<any> {
    return this.http.get(`${this.urlBack}${url}`, { params });
  }

  /**
   * Metodo DELETE
   *
   * @param {string} url
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  public delete(url: string): Observable<any> {
    return this.http.delete(`${this.urlBack}${url}`);
  }
}
