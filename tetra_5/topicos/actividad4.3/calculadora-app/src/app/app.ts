import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'calculadora-app';
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  // Métodos para las operaciones
  sumar() {
    this.resultado = this.num1 + this.num2;
  }

  restar() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 === 0) {
      alert('No se puede dividir entre 0');
    } else {
      this.resultado = this.num1 / this.num2;
    }
  }
}
