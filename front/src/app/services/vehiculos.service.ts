import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { IVehiculo } from '../interface/i-vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  private url: string = '/vehiculos';

  constructor(private httpService: HttpService) {}

  /**
   * Obtener todos los vehiculos
   *
   * @return {*}  {Observable<IVehiculo[]>}
   * @memberof VehiculosService
   */
  public getVehiculos(): Observable<IVehiculo[]> {
    return this.httpService.get(this.url);
  }

  /**
   * Eliminar un vehiculo por id
   *
   * @param {number} id
   * @return {*}  {Observable<any>}
   * @memberof VehiculosService
   */
  public deleteVehiculo(id: number): Observable<any> {
    return this.httpService.delete(`${this.url}/${id}`);
  }

  /**
   * Obtener un vehiculo por id
   *
   * @param {number} id
   * @return {*}  {Observable<IVehiculo[]>}
   * @memberof VehiculosService
   */
  public getVehiculo(id: number): Observable<IVehiculo[] | IVehiculo> {
    return this.httpService.get(`${this.url}/${id}`);
  }

  /**
   * Actualizar los datos del vehiculo
   *
   * @param {number} id
   * @param {IVehiculo} body
   * @return {*}  {Observable<any>}
   * @memberof VehiculosService
   */
  public putVehiculo(id: number, body: IVehiculo): Observable<any> {
    return this.httpService.put(`${this.url}/${id}`, body);
  }

  /**
   * Nuevo vehiculo
   *
   * @param {number} id
   * @param {IVehiculo} body
   * @return {*}  {Observable<any>}
   * @memberof VehiculosService
   */
  public postVehiculo(body: IVehiculo): Observable<any> {
    return this.httpService.post(`${this.url}`, body);
  }
}
