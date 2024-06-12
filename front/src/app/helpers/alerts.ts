import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export class Alerts {
  /**
   * Funcion de alertas basicas
   *
   * @static
   * @param {string} title
   * @param {string} text
   * @param {SweetAlertIcon} icon
   * @return {*}
   * @memberof alerts
   */
  static basicAlert(
    title: string,
    text: string,
    icon: SweetAlertIcon
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire(title, text, icon);
  }
}
