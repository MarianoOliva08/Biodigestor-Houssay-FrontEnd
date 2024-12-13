import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

// Definición de la estructura de los objetos Pregunta
interface Pregunta {
  titulo: string; // Título de la pregunta
  pregunta: string; // Contenido de la pregunta
  respuestas: { usuario: string; respuesta: string; destacada?: boolean }[]; // Respuestas asociadas a la pregunta
  usuario: string; // Usuario que hizo la pregunta
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Importación de módulos necesarios
  templateUrl: './forum.component.html', // Enlace al archivo HTML
  styleUrls: ['./forum.component.css'] // Enlace al archivo CSS
})
export class ForumComponent implements OnInit {
  formulario: FormGroup; // Formulario para la pregunta
  formularioRespuesta: FormGroup; // Formulario para la respuesta
  preguntas: Pregunta[] = []; // Arreglo para almacenar las preguntas
  currentUser: string = 'Anónimo'; // Usuario actual, por defecto 'Anónimo'
  isAdmin: boolean = false; // Indica si el usuario es administrador

  constructor(
    private fb: FormBuilder, // Para crear formularios reactivos
    private router: Router, // Para navegar entre rutas
    private authService: AuthService // Servicio de autenticación
  ) {
    // Inicialización de los formularios reactivos con validación
    this.formulario = this.fb.group({
      titulo: ['', Validators.required], // Campo título de la pregunta (obligatorio)
      pregunta: ['', Validators.required] // Campo pregunta (obligatorio)
    });

    this.formularioRespuesta = this.fb.group({
      respuesta: ['', Validators.required] // Campo respuesta (obligatorio)
    });
  }

  ngOnInit(): void {
    // Obtener información del usuario desde el servicio de autenticación
    const userInfo = this.authService.getUserInfo();
    if (userInfo && userInfo.username) {
      this.currentUser = userInfo.username; // Si existe, actualiza el nombre de usuario
      this.isAdmin = userInfo.role === 'admin'; // Determina si el usuario es administrador
    }
  }

  // Método para enviar una nueva pregunta
  enviarPregunta() {
    if (this.formulario.valid) {
      // Crear un nuevo objeto de pregunta
      const nuevaPregunta: Pregunta = {
        titulo: this.formulario.get('titulo')?.value || '',
        pregunta: this.formulario.get('pregunta')?.value || '',
        respuestas: [], // Inicialmente sin respuestas
        usuario: this.currentUser // Asocia la pregunta al usuario actual
      };
      this.preguntas.push(nuevaPregunta); // Añadir la pregunta al arreglo de preguntas
      this.formulario.reset(); // Limpiar el formulario
    } else {
      alert('Por favor, complete todos los campos.'); // Mostrar mensaje si el formulario no es válido
    }
  }

  // Método para enviar una respuesta a una pregunta
  enviarRespuesta(pregunta: Pregunta) {
    if (this.formularioRespuesta.valid) {
      // Obtener el texto de la respuesta
      const respuesta = this.formularioRespuesta.get('respuesta')?.value || '';
      // Añadir la nueva respuesta a la lista de respuestas de la pregunta
      pregunta.respuestas.push({
        usuario: this.currentUser, // Asociar la respuesta al usuario actual
        respuesta,
        destacada: false // Por defecto la respuesta no está destacada
      });
      this.formularioRespuesta.reset(); // Limpiar el formulario de respuesta
    } else {
      alert('Por favor, ingrese una respuesta.'); // Mostrar mensaje si el formulario no es válido
    }
  }

  // Método para destacar o desmarcar una respuesta como destacada
  destacarRespuesta(respuesta: { usuario: string; respuesta: string; destacada?: boolean }) {
    respuesta.destacada = !respuesta.destacada; // Cambia el estado de "destacada"
  }

  // Método para volver a la página anterior
  volverAtras(): void {
    this.router.navigate(['../']); // Navegar hacia la ruta anterior
  }
}
