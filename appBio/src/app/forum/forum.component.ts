import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

interface Pregunta {
  titulo: string;
  pregunta: string;
  respuestas: { usuario: string; respuesta: string }[];
  usuario: string;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  formulario: FormGroup;
  formularioRespuesta: FormGroup;
  preguntas: Pregunta[] = [];
  currentUser: string = 'Anónimo';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      pregunta: ['', Validators.required]
    });

    this.formularioRespuesta = this.fb.group({
      respuesta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const userInfo = this.authService.getUserInfo();
    if (userInfo && userInfo.username) {
      this.currentUser = userInfo.username;
    }
  }

  enviarPregunta() {
    if (this.formulario.valid) {
      const nuevaPregunta: Pregunta = {
        titulo: this.formulario.get('titulo')?.value || '',
        pregunta: this.formulario.get('pregunta')?.value || '',
        respuestas: [],
        usuario: this.currentUser
      };
      this.preguntas.push(nuevaPregunta);
      this.formulario.reset();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  enviarRespuesta(pregunta: Pregunta) {
    if (this.formularioRespuesta.valid) {
      const respuesta = this.formularioRespuesta.get('respuesta')?.value || '';
      pregunta.respuestas.push({ 
        usuario: this.currentUser, 
        respuesta 
      });
      this.formularioRespuesta.reset();
    } else {
      alert('Por favor, ingrese una respuesta.');
    }
  }

  volverAtras(): void {
    this.router.navigate(['../']);
  }
}