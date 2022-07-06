import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Iron Man','Tor','Goku','Capitán América'];
  heroeBorrado:string='';
  borrarHeroe():void{
    this.heroeBorrado=this.heroes.pop() || '';
   
   
    
  }

}
