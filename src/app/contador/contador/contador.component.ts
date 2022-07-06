import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <span>{{count}}</span>
        <br/>
        <br/>
    <button (click)="sumar(base)">+{{base}}</button>
    <button (click)="sumar(-base)">-{{base}}</button>
    `

})
export class ContadorComponent{
    title:string = 'Counter';
    count:number=0;
    base:number=5;

  sumar(cantidad:number=1){
    this.count+=cantidad;
  }

}