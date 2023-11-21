import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidadQuetzales: number = 0;
  resultado: number = 0; // Inicializa con un valor por defecto
  tuNumeroDeCarnet: string = ""; // Reemplaza con tu número de carné

  convertirDivisa() {
    const tasaCambio = 8;
    this.resultado = this.cantidadQuetzales / tasaCambio;
  }
}
