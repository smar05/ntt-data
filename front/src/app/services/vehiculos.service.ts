import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, shareReplay } from 'rxjs';
import { IVehiculo } from '../interface/i-vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  private url: string = '/vehiculos';
  private dataVehiculos!: Observable<IVehiculo[]>;
  // Id, Ob(vehiculo)
  private dataVehiculoId: { [key: string]: Observable<IVehiculo> } = {};

  constructor(private httpService: HttpService) {}

  /**
   * Obtener todos los vehiculos
   *
   * @return {*}  {Observable<IVehiculo[]>}
   * @memberof VehiculosService
   */
  public getVehiculos(): Observable<IVehiculo[]> {
    if (!this.dataVehiculos) {
      this.dataVehiculos = this.httpService.get(this.url).pipe(shareReplay(1));
    }
    return this.dataVehiculos;
  }

  /**
   * Eliminar un vehiculo por id
   *
   * @param {number} id
   * @return {*}  {Observable<any>}
   * @memberof VehiculosService
   */
  public deleteVehiculo(id: number): Observable<any> {
    this.dataVehiculos = null as any;
    delete this.dataVehiculoId[id];
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
    if (!this.dataVehiculoId[id]) {
      this.dataVehiculoId[id] = this.httpService
        .get(`${this.url}/${id}`)
        .pipe(shareReplay(1));
    }
    return this.dataVehiculoId[id];
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
    this.dataVehiculos = null as any;
    delete this.dataVehiculoId[id];
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
    this.dataVehiculos = null as any;
    return this.httpService.post(`${this.url}`, body);
  }
}
