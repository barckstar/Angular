import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoIzq = "../assets/img/dice1.png"; 
  dadoDer = "../assets/img/dice2.png";
  number1 = 1; 
  number2 = 2;

  tirarDados():void{
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzq = "../assets/img/dice"+this.number1+".png"
    this.dadoDer = "../assets/img/dice"+this.number2+".png"
  } 
}
