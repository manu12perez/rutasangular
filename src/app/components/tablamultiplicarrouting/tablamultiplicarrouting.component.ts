import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent {
  public numero!: number;
  public numeros!: Array<number>;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros["numero"]);
        
        this.mostrarTabla();
      }
    })
  }

  mostrarTabla(): void {
    let aux = new Array<number>();
    for (var i = 1; i <= 10; i++) {
      var resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
  }
}
