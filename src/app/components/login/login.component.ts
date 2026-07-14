import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private router: Router){}

  ingresar(){

    if(this.usuario === 'admin' && this.password === '1234'){
        localStorage.setItem('logueado','true');
      this.router.navigate(['/formulario']);

    }else{

      this.mensaje = 'Usuario o contraseña incorrectos';

    }

  }

}