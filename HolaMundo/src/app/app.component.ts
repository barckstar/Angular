import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Leonel'
  textoPlaceholder = 'Escriba algo aqui'
  deshabilitado = true
  imgSrc = 'https://docs.angular.lat/assets/images/logos/angular/angular.png'
  texto ='Esto es un ejemplo de event binding'
  textoTWDB = ''
  listEstudiantes : any[] = [
    {nombre: 'Tomas Perez', estado: 'Promocionado'},
    {nombre: 'Juanito Adias', estado: 'Regular'},
    {nombre: 'Patricia Vivez', estado: 'Libre'},
    {nombre: 'Carlos Mendoza', estado: 'Promocionado'},
    {nombre: 'Brayan Gonzalez', estado: 'Regular'},
    {nombre: 'Laura Gomez', estado: 'Libre'},
  ]
  mostar = true
  mosta2 = true
  mosta3 = true
  mosta4 = true

  constructor(){
    setInterval( ()=> this.nombre = 'Pedro', 3000)
    setInterval( ()=> this.deshabilitado = false, 3000)
  }

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2
  }

  camdiarTexto(): void{
    this.texto='En el proximo ejemplo vamos a ver un poco Tow way databinding'
  }

  toogle(): void{
    this.mostar = !this.mostar
  }
  toogle2(): void{
    this.mosta2 = !this.mosta2
  }
  toogle3(): void{
    this.mosta3 = !this.mosta3
  }
  toogle4(): void{
    this.mosta4 = !this.mosta4
  }
}
