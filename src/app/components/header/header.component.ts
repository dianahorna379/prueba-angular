import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // Aquí simulo un usuario con su nombre
  usuario = { nombre: 'Juan Pérez' };

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías obtener el nombre del usuario desde un servicio de autenticación
  }

  cerrarSesion(): void {
    // Lógica para cerrar sesión (podrías redirigir al login o limpiar el token, etc.)
    console.log('Sesión cerrada');
    // Redirigir a la página de login, por ejemplo:
    // this.router.navigate(['/login']);
  }}
