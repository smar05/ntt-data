import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, shareReplay } from 'rxjs';
import { ICategoria } from '../interface/i-categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private url: string = '/categorias';
  private categorias: Observable<ICategoria[]> = null as any;

  constructor(private httpService: HttpService) {}

  /**
   * Obtener todos los categorias
   *
   * @return {*}  {Observable<ICategoria[]>}
   * @memberof CategoriasService
   */
  public getCategorias(): Observable<ICategoria[]> {
    if (!this.categorias) {
      this.categorias = this.httpService.get(this.url).pipe(shareReplay(1));
    }

    return this.categorias;
  }
}
