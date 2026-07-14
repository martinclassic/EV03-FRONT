import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router){}
  get logueado(): boolean{

    return localStorage.getItem('logueado') === 'true';

}
  cerrarSesion(){

    localStorage.removeItem('logueado');

    this.router.navigate(['/']);

  }

}