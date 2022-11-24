import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'joaquin';
  nombreUpper: string = 'JOAQUIN';
  nombreCompleto: string = 'jOaQuIn VeNtO';

  fecha: Date = new Date(); // el día de hoy
}
