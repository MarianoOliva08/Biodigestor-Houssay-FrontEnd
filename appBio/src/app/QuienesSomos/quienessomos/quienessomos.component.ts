import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quienessomos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent {
  integrantes = [
    { nombre: 'Quimey', apellido: 'Apellido1' },
    { nombre: 'Paz', apellido: 'Apellido2' },
    { nombre: 'Roxana', apellido: 'Apellido3' },
    { nombre: 'Mariano', apellido: 'Oliva' }  // Nuevo integrante
  ];
}
