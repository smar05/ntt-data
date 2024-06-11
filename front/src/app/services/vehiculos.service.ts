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
}
