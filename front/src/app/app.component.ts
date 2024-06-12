import { Component, OnInit } from '@angular/core';
import { EnumRutas } from './enums/enums-rutas';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ntt-data';
  public showNavbar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
  }

  private checkRoute(url: string): void {
    this.showNavbar = !(
      url.includes(`/${EnumRutas.LOGIN}`) ||
      url.includes(`/${EnumRutas.REGISTER}`)
    );
  }
}
