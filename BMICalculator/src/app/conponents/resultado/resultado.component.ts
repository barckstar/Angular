import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number
  resultado: string
  interpretacion: string

  constructor(private route: ActivatedRoute) {
    this.resultado = ''
    this.interpretacion = '' 
    this.bmi = +route.snapshot.paramMap.get('valor')!
  }

  ngOnInit(): void {
    //se ejecuta cuando se ejecuta la pagina
    this.getResultado()
  }

  getResultado(){

    if(this.bmi >= 25){
      this.resultado = 'Exeso de peso'
      this.interpretacion = 'Tienes un peso mayor al normal, tienes que hacer ejercicio'
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal'
      this.interpretacion = 'Tienes un peso normal. Buen Trabajo...!!!!'
    }else {
      this.resultado = 'Bajo de peso'
      this.interpretacion = 'Tienes un peso menor al normal, tienes que comer mas'
    }
  }

}
