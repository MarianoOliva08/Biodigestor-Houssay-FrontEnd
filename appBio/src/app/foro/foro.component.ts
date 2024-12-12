import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {  // Cambié el nombre de la clase aquí a ForoComponent
  tituloConsulta: string = '';
  descripcionConsulta: string = '';

  // Listado de respuestas (mock data para pruebas)
  respuestas = [
    {
      usuario: 'Usuario1',
      mensaje: 'Tengo problemas para iniciar sesión',
      respuestas: [
        { usuario: 'Administrador', mensaje: 'Estamos trabajando para solucionarlo' }
      ]
    },
    {
      usuario: 'Usuario2',
      mensaje: '¿Dónde veo mis facturas?',
      respuestas: [
        { usuario: 'Administrador', mensaje: 'Dentro de "Clientes" encuentras la sección facturas' }
      ]
    }
  ];

  // Preguntas frecuentes (mock data)
  preguntasFrecuentes = [
    {
      usuario: 'Usuario',
      pregunta: '¿Cómo cambio mi contraseña?',
      respuesta: 'Ve a la sección "Perfil" y selecciona "Cambiar contraseña".'
    },
    {
      usuario: 'Usuario',
      pregunta: '¿Cómo contacto con soporte?',
      respuesta: 'Puedes escribirnos al correo soporte@ejemplo.com.'
    }
  ];

  // Función para enviar una consulta
  enviarConsulta() {
    if (this.tituloConsulta && this.descripcionConsulta) {
      this.respuestas.push({
        usuario: 'Tú',
        mensaje: `${this.tituloConsulta}: ${this.descripcionConsulta}`,
        respuestas: []
      });
      this.tituloConsulta = '';
      this.descripcionConsulta = '';
    }
  }

  // Función para responder a una consulta
  responder(respuesta: any) {
    const mensaje = prompt('Escribe tu respuesta:');
    if (mensaje) {
      respuesta.respuestas.push({ usuario: 'Tú', mensaje });
    }
  }

  // Navegar a otra página (si lo necesitas)
  navegarAClientes() {
    this.router.navigate(['/clientes']);
  }

  constructor(private router: Router) {} // Inyección del Router
}
