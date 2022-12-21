import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
  dato: number | string = '';

  response: number = 0;

  calcular(dato:any):number{

    this.response = 6373-(6373*(Math.cos(Math.asin((dato)/6373))))
    this.response *= 1000
    return this.response;
  }

  borrar():void{
    this.response = 0;
    this.dato=''
  }

}
