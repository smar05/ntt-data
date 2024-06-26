import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnumLocalStorage } from '../enums/enums-localstorage';
import { EnumRutas } from '../enums/enums-rutas';

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
    params.token = localStorage.getItem(EnumLocalStorage.TOKEN);
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
    return this.http.delete(`${this.urlBack}${url}`, {
      params: { token: localStorage.getItem(EnumLocalStorage.TOKEN) as string },
    });
  }

  /**
   * Metodo PUT
   *
   * @param {string} url
   * @param {*} [body={}]
   * @return {*}  {*}
   * @memberof HttpService
   */
  public put(url: string, body: any = {}): Observable<any> {
    return this.http.put(`${this.urlBack}${url}`, body, {
      params: { token: localStorage.getItem(EnumLocalStorage.TOKEN) as string },
    });
  }

  /**
   * Metodo POST
   *
   * @param {string} url
   * @param {*} [body={}]
   * @return {*}  {*}
   * @memberof HttpService
   */
  public post(url: string, body: any = {}): Observable<any> {
    let params: any = null;
    if (!(url.includes(EnumRutas.LOGIN) || url.includes(EnumRutas.REGISTER))) {
      params = {
        token: localStorage.getItem(EnumLocalStorage.TOKEN) as string,
      };
    }

    return this.http.post(`${this.urlBack}${url}`, body, {
      params,
    });
  }
}
