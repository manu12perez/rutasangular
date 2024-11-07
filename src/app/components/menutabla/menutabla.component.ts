import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  templateUrl: './menutabla.component.html',
  styleUrl: './menutabla.component.css'
})
export class MenutablaComponent {
  public numerosAleatorios: Array<number>;

  constructor() {
    this.numerosAleatorios = new Array<number>();
  }

  generarNumAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    this.numerosAleatorios.push(numeroAleatorio);
  }
}
