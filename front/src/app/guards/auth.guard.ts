import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
} from '@angular/router';
import { EnumLocalStorage } from '../enums/enums-localstorage';
import { jwtDecode } from 'jwt-decode';
import { EnumRutas } from '../enums/enums-rutas';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot | any): Promise<boolean> {
    return new Promise((resolve) => {
      let token: string = localStorage.getItem(EnumLocalStorage.TOKEN) || '';
      let canActivate: boolean = !this.isTokenExpired(token);

      if (!canActivate) {
        localStorage.removeItem(EnumLocalStorage.TOKEN);
        this.router.navigateByUrl('/' + EnumRutas.LOGIN);
      }

      resolve(canActivate);
    });
  }

  /**
   * Validar si el token expiro
   *
   * @private
   * @param {string} token
   * @return {*}  {boolean}
   * @memberof AuthGuard
   */
  private isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(new Date().getTime() / 1000);

    return decoded.exp < currentTime;
  }
}
