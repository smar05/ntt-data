import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ICategoria } from '../interface/i-categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private url: string = '/categorias';

  constructor(private httpService: HttpService) {}

  /**
   * Obtener todos los categorias
   *
   * @return {*}  {Observable<ICategoria[]>}
   * @memberof CategoriasService
   */
  public getCategorias(): Observable<ICategoria[]> {
    return this.httpService.get(this.url);
  }

  /**
   * Obtener una categoria por id
   *
   * @param {number} id
   * @return {*}  {Observable<ICategoria[]>}
   * @memberof CategoriasService
   */
  public getCategoria(id: number): Observable<ICategoria[] | ICategoria> {
    return this.httpService.get(`${this.url}/${id}`);
  }
}
